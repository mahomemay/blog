module.exports = {
	title: 'Mahome\'s Blog',
	description: 'Welcome to my web blog',
	head: [
		['link', { rel: 'icon', href: '/logo.png' }], 
	],
	base: '/blog/', // 这是部署到github相关的配置 下面会讲
	markdown: {
		// lineNumbers: true // 代码块显示行号
	},
	dest: 'docs',
	themeConfig: {
		lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
		nav: [
			{
				text: 'Notes',
				link: '/Notes/'
			}, // 内部链接 以docs为根目录
			{
				text: 'Diaries',
				link: '/Diaries/'
			}
		],
		sidebarDepth: 2,
		// sidebar:  {
		// 	'/Notes/': [
		// 		'',
		// 		// 'VuePress',
		// 		// 'JavaScript-prototype',
		// 		// 'call-apply-bind'
		// 	],
		// 	'/Diaries/': [
		// 		'',
		// 		'20190809',
		// 	]
		// }
	}
}