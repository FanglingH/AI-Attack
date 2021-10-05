var GALLERYITEMS = [ // gallery contents list;
    {img: '201709', link: 'https://www.theguardian.com/technology/2017/sep/07/new-artificial-intelligence-can-tell-whether-youre-gay-or-straight-from-a-photograph', name: 'Sept.2107'},
    {img: '201902', link: 'https://www.bbc.com/news/technology-49446729', name: 'Feb.2019'},
    {img: '201903', link: 'https://www.iihs.org/news/detail/self-driving-vehicles-could-struggle-to-eliminate-most-crashes', name: 'Mar.2019'},
    {img: '201905', link: 'https://www.bbc.com/news/business-47691078', name: 'May.2019'},
    {img: '201908', link: 'https://www.globaltimes.cn/content/1163246.shtml', name: 'Aug.2019'},
    {img: '201909', link: 'https://www.latimes.com/california/story/2019-09-12/facial-recognition-police-body-cameras-california-legislation', name: 'Sep.2019'},
    {img: '201910', link: 'https://www.scmp.com/tech/big-tech/article/3110981/chinese-court-orders-wildlife-park-delete-facial-recognition-data', name: 'Oct.2019'},
    {img: '201911', link: 'https://baijiahao.baidu.com/s?id=1648982760980007836&wfr=spider&for=pc', name: 'Nov.2019'},
    {img: '201912', link: 'https://www.albawaba.com/node/ai-horror-story-amazons-alexa-orders-woman-stab-herself-heart', name: 'Dec.2019'},
    {img: '202001', link: 'https://www.epo.org/news-events/news/2020/20200128.html', name: 'Jan.2020'},
]
// 创建一个 组，意思为图片编号对应的链接地址和所对应的名称
var AUDIOS = ['agree', 'neutral', 'disagree']; // Audio list;

function initGallery() {
    var gallery = document.getElementById('gallery')
    GALLERYITEMS.forEach(({img, link, name}, index) => {
        var container = createGalleryContainer(index, link); // Create a container element
        var image = createGalleryImg(img); // Create a image element;
        var a = createLink(link, name); // Create a link element;
        container.appendChild(image); // Insert the image element into the container;
        container.appendChild(a); // Insert the link element into the container;
        gallery.appendChild(container); // Insert the container element into the gallery section;
    })
}
//该函数以图片ID为索引，将图片对应的连接、名称进行绑定，能够实现光标移动至图片出现名称，点击跳转的目的

function createGalleryContainer(index, link) {
    var container = document.createElement('a');
    container.className = 'gallery-item';
    container.href = link; // Href link
    container.target = '_blank'; 
    container.id = `gallery_item_${index}`; // Fill in the display text;
    container.style = `width: ${100 / GALLERYITEMS.length}%`
    return container;
}
// 创建一个“a”标签，采用的样式是“gallery-item”，实现点击图片，打开一个图片对应链接的新的网页

function createGalleryImg(img){
    var fileSrc = `./assets/images/${img}.jpg`; // Concatenate string
    var image = new Image(); // Create new Image element
    image.src = fileSrc; // Image file path
    image.id = img;
    image.className = 'gallery-item-img'
    return image;
}
// 该方法为引入资源文件夹中的图片

function createLink(link, name) {
    var a = document.createElement('a');
    a.href = link; // Navigation link;
    a.target = '_blank'; // Open on a new window
    a.innerText =name; // Fill in the display text;
    a.className = "gallery-item-link";
    return a;
}
// 创建一个标签“a”，并创建一个链接，并为其赋予样式"gallery-item-link"

function onBtnClicked(id) {
    var otherAudios = AUDIOS.filter(e => e !== id); // Filter current audio out
    otherAudios.forEach(oth => {
        var othEl = document.getElementById(oth);
        if (othEl) othEl.pause(); // Pause all the filtered audios
    })
    var el = document.getElementById(id);
    el.currentTimestamp = 0; // Set current audio to start;
    el.play(); // Play audio
}
// 点击第二板块按钮时，首先关闭所有音频，然后播放按钮对应的音频

window.onload = () => { // Run when window first initialized
    initGallery();
}