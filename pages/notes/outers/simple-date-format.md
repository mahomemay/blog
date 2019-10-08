---
title: 日期格式大全
lang: zh-CN
date: 2019-10-07
sidebar: auto
---

# 开发日期格式大全 - SimpleDateFormat

## 前言

在开发过程中曾遇到过需要定义日期格式的问题, 对于日期格式的写法并不了解, 经过度娘的温馨指导, 整理了一份比较完整的日期格式, 特此记录下

> [参考链接: Java日期转换SimpleDateFormat格式大全](https://blog.csdn.net/solocoder/article/details/83655885)

## 日期格式

- `G` : 年代标志符
- `y` : 年
- `M` : 月
- `d` : 日
- `h` : 时 在上午或下午 (1~12)
- `H` : 时 在一天中 (0~23)
- `m` : 分
- `s` : 秒
- `S` : 毫秒
- `E` : 星期
- `D` : 一年中的第几天
- `F` : 一月中第几个星期几
- `w` : 一年中第几个星期
- `W` : 一月中第几个星期
- `a` : 上午 / 下午 标记符
- `k` : 时 在一天中 (1~24)
- `K` : 时 在上午或下午 (0~11)
- `z` : 时区

## 详细示例

| 字母 |  日期或时间元素  |      表示          |  示例 |
|:---:|:----------------:|:-----------------:|:-----|
|  G  |  Era标志符	     | Text	              |  AD |
|  y  |  年	             | Year	             |   1996; 96 |
|  M  |  年中的月份	     |  Month	          |   July; Jul;07 |
|  w  |  年中的周数	     |  Number	          |   27 |
|  W  |  月份中的周数	 |  Number	          |   2 |
|  D  |  年中的天数	     |  Number	          |   189 |
|  d  |  月份中的天数	 |  Number	          |   10 |
|  F  |  月份中的星期	 |  Number	          |   2 |
|  E  |  星期中的天数	 |  Text	          |   Tuesday; Tue |
|  a  |  Am/pm 标记	    |  AM/PM             |   PM |
|  H  |  一天中的小时数	 |  (0-23)	          |   Number 0 |
|  k  |  一天中的小时数	 |  (1-24)	          |   Number 24 |
|  K  |  am/pm 中的小时数|  (0-11)	          |   Number 0 |
|  h  |  am/pm 中的小时数|  (1-12)	          |   Number 12 |
|  m  |  小时中的分钟数	 |  Number	          |   30 |
|  s  |  分钟中的秒数	 |  Number	          |   55 |
|  S  |  毫秒数	         | Number	          |  978 |
|  z  |  时区	         | General time zone  |  Pacific Standard Time; PST; GMT-08:00 |
|  Z  |  时区	         | RFC 822 time zone  |  -0800 |
