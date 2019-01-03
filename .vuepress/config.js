module.exports = {
  title: 'JAMstack Oslo',
  description: 'Notes on the organization and planning of JAMstack Oslo chapter',
  themeConfig: {
    nav: [
      { text: 'Meetup', link: 'https://www.meetup.com/JAMstack-Oslo/' },
      { text: 'Calendar', link: 'https://calendar.google.com/calendar?cid=YWxlbWF5aHUuY29tX2tzaGxxbHFsZjdmYTlnbjZjZWRqY2NsZzRjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20' },
      { text: 'Discord', link: 'https://discord.gg/rE3pcSw' },
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
	  '/meetings/meeting-planning-22-12-2018',
	  '/meetings/meeting-planning-03-01-2019'
	]
      },
    ]
  }
}
