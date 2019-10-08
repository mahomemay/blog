---
title: Nginx 配置 Node.js 项目
lang: zh-CN
date: 2019-10-07
---

# Nginx 配置 Node.js Web Serve

``` nginx
server
{
    # http 端口监听
    listen 80;

    # 域名配置
    server_name test.jiantaokeji.com;

    # https 证书配置
    listen 443 ssl;
	ssl_certificate /www/server/panel/vhost/cert/jiantaokeji.com/jiantaokeji_com.crt;
	ssl_certificate_key /www/server/panel/vhost/cert/jiantaokeji.com/jiantaokeji_com.key;
	ssl_protocols TLSv1 TLSv1.1 TLSv1.2;	
	ssl_prefer_server_ciphers on;	
	ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH'; charset utf8;

    # 反向代理
    proxy_pass http://127.0.0.1:8094;
    proxy_set_header Host 127.0.0.1;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;

    # 首页文件配置
    index index.php index.html index.htm default.php default.htm default.html;
    root /www/wwwroot/node/irrigation_admin/bin;
    
    # 开启 gzip 压缩
    gzip on;
    gzip_min_length 1k;
    gzip_buffers   4 16k;
    gzip_http_version 1.0;
    gzip_comp_level 2;
    gzip_types    text/plain application/x-javascript text/css application/xml;
    gzip_vary on;
    
    # https 证书配置
    listen 443 ssl;
	ssl_certificate /www/server/panel/vhost/cert/jiantaokeji.com/jiantaokeji_com.crt;
	ssl_certificate_key /www/server/panel/vhost/cert/jiantaokeji.com/jiantaokeji_com.key;
	ssl_protocols TLSv1 TLSv1.1 TLSv1.2;	
	ssl_prefer_server_ciphers on;	
	ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH'; charset utf8;
    
    # http 重定向到 https
    if ($server_port !~ 443){
        rewrite ^(/.*)$ https://$host$1 permanent;
    }
    
    # 错误页配置
    error_page 404 /404.html;
    error_page 502 /502.html;
    
	# 资源有效期
    expires 12h;
    if ($request_uri ~* "(php|jsp|cgi|asp|aspx)") 
    {
        expires 0;
    }
    
    # 持久化连接相关配置
    #proxy_connect_timeout 30s;
    #proxy_read_timeout 86400s;
    #proxy_send_timeout 30s;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";

    add_header X-Cache $upstream_cache_status;
    
    # 伪静态
    #location / {
    #    root /www/wwwroot/node/industry/dist;
    #    # 解决 vue 刷新 404
    #    try_files $uri $uri/ /index.html last;
    #    index index.html;
    #}
    
    #禁止访问的文件或目录
    location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md)
    {
        return 404;
    }
    
    # 日志路径
    access_log  /www/wwwlogs/test.jiantaokeji.com.log;
    error_log  /www/wwwlogs/test.jiantaokeji.com.error.log;
}
```