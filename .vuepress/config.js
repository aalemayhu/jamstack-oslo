module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Meetings', link: '/meetings/' },
      { text: 'Discord', link: 'https://discord.gg/rE3pcSw' },
      { text: 'Meetup', link: 'https://www.meetup.com/JAMstack-Oslo/' },
      { text: 'GitHub', link: 'https://github.com/scanf/jamstack-oslo' },
    ],
    sidebar: [
      {
	title: 'Home',
	collapsable: false,
	children: [
	  '/'
	]
      },
      {
	title: 'Meetings',
	collapsable: false,
	children: [
	  '/meetings/meeting-planning-22-12-2018'
	]
      },
    ]
  }
}
