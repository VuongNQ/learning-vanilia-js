const data = [
	{
		"country": "France",
		"content": "pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
		"name": "Connor R. Lynch",
		"region": "Haute-Normandie",
		"postalZip": "7157"
	},
	{
		"country": "Russian Federation",
		"content": "Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra",
		"name": "Noah W. Barnes",
		"region": "Irkutsk Oblast",
		"postalZip": "25435"
	},
	{
		"country": "Russian Federation",
		"content": "dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi",
		"name": "Nichole U. Hobbs",
		"region": "Nizhny Novgorod Oblast",
		"postalZip": "27-317"
	},
	{
		"country": "France",
		"content": "nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec",
		"name": "Janna D. Mccoy",
		"region": "Champagne-Ardenne",
		"postalZip": "1204"
	},
	{
		"country": "Sweden",
		"content": "nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare",
		"name": "Lisandra J. Barton",
		"region": "Jönköpings län",
		"postalZip": "24-871"
	}
];

// * viet function dem co bao nhieu country trong array
const Price = data.map(item => item.country != "" ? "country" : false)
// * viet function tim index cua object nao co conten dai nhat va object nao co content ngan nhat
//1. tim content dai nhat
const setPriceMax = data.map(item => item.content.length === 246 ? item.content : false)
//2.tim content nho nhat
const setPriceMin = data.map(item => item.content.length < 215 ? item.content: false)
// * viet function tim object co postalZip ma co chua ki tu chu so
const postaZip = data.map(item => item.postalZip.length === 6 ? item.postalZip : false )
console.log(postaZip)
