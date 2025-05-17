const artGalleries = [
    {
        id: 1,
        name: "湖北美术馆",
        enName: "Hubei Museum of Art",
        address: "东湖路三宫殿1号(省博湖北日报地铁站A口步行150米)",
        district: "wuchang",
        type: "museum",
        description: "湖北美术馆是国家重点美术馆，建筑面积3.1万平方米，是华中地区规模最大的美术馆。",
        openTime: "周二至周日 9:00-17:00（16:30停止入场）",
        ticket: "免费（特展除外）",
        position: [114.350956, 30.541213],
        image: "http://store.is.autonavi.com/showpic/4a3c4c862b2e79a24e4dfe4b017b7a58"
    },
    {
        id: 2,
        name: "武汉美术馆(汉口馆)",
        enName: "Wuhan Art Museum (Hankou)",
        address: "保华街2号",
        district: "hankou",
        type: "museum",
        description: "武汉美术馆汉口馆是武汉市重要的公共文化设施，以收藏、研究、展示、教育为主要职能。",
        openTime: "周二至周日 9:00-17:00",
        ticket: "免费",
        position: [114.306219, 30.584097],
        image: "http://store.is.autonavi.com/showpic/5a89565b86d8303ee113035e9ef26be9"
    },
    {
        id: 3,
        name: "武汉美术馆(琴台馆)",
        enName: "Wuhan Art Museum (Qintai)",
        address: "知音大道77号",
        district: "hanyang",
        type: "museum",
        description: "武汉美术馆琴台馆是武汉市新建的重要艺术场馆，位于汉阳区，环境优美。",
        openTime: "周二至周日 9:00-17:00",
        ticket: "免费",
        position: [114.265879, 30.553421],
        image: "https://aos-comment.amap.com/B0H6LSD92D/comment/534f6ef7680444189eff6efae6fe2430_2048_2048_80.jpg"
    },
    {
        id: 4,
        name: "武汉天地当代艺术空间",
        enName: "Wuhan Tiandi Museum of Contemporary Art",
        address: "武汉市江岸区兴业路1号",
        district: "hankou",
        type: "gallery",
        description: "位于武汉天地商业区内的当代艺术空间，定期举办当代艺术展览。",
        openTime: "周二至周日 10:00-18:00",
        ticket: "免费",
        position: [114.335756, 30.596536],
        image: "https://aos-comment.amap.com/B0FFG87QDO/comment/e633189d8bb5add40b9f80e8cb4c0b83_2048_2048_80.jpg"
    },
    {
        id: 5,
        name: "K11艺术空间",
        enName: "K11 Art Space",
        address: "武汉市汉阳区龙阳大道6号K11购物艺术中心",
        district: "hanyang",
        type: "artspace",
        description: "K11艺术空间是集艺术、人文、自然于一体的多元文化空间。",
        openTime: "每日 10:00-22:00",
        ticket: "免费",
        position: [114.261442, 30.556457],
        image: "https://poi-pic.cdn.bcebos.com/22bfe01a0fd1b6525e9e88e2a32e160e.jpg"
    },
    {
        id: 6,
        name: "武汉大学万林艺术博物馆",
        enName: "Wanlin Art Museum of Wuhan University",
        address: "武汉市武昌区珞珈山路武汉大学校内",
        district: "wuchang",
        type: "museum",
        description: "武汉大学万林艺术博物馆是一座集艺术品收藏、展示、研究、教育等功能于一体的综合性大学艺术博物馆。",
        openTime: "周二至周日 9:30-17:00",
        ticket: "免费",
        position: [114.366316, 30.535355],
        image: "https://poi-pic.cdn.bcebos.com/17203e7f26979831d847ee9c181f1d91.jpg"
    },
    {
        id: 7,
        name: "合美术馆",
        enName: "He Art Museum",
        address: "野芷湖西路16号(马湖地铁站B口步行120米)",
        district: "wuchang",
        type: "museum",
        description: "合美术馆是武汉重要的当代艺术展示空间，经常举办高水平的艺术展览。",
        openTime: "周二至周日 10:00-17:00",
        ticket: "免费（特展除外）",
        position: [114.419563, 30.498756],
        image: "http://store.is.autonavi.com/showpic/45772dd0ea8bb1d1e7201b6b304c3cb5"
    },
    {
        id: 8,
        name: "东湖杉美术馆",
        enName: "Donghu Shan Art Museum",
        address: "东湖风景区鲁磨路668号",
        district: "wuchang",
        type: "museum",
        description: "位于东湖风景区内的美术馆，环境优美，展示当代艺术作品。",
        openTime: "周二至周日 9:00-17:00",
        ticket: "免费",
        position: [114.367879, 30.553421],
        image: "http://store.is.autonavi.com/showpic/8c63a99d3ccd68fae9025e97c470362c"
    },
    {
        id: 9,
        name: "鲁迅书店&美术馆",
        enName: "Luxun Book Store & Art Gallery",
        address: "湖北省武汉市蔡甸区设法山路三国历史文化公园14栋",
        district: "caidian",
        type: "museum",
        description: "由北京鲁迅博物馆、武汉经开区合作共建，也是鲁迅博物馆首次在北京之外的城市开设艺文空间。",
        openTime: "每日 10:00-22:00",
        ticket: "免费",
        position: [114.265879, 30.553421],
        image: "https://aos-comment.amap.com/B0IRJALS6Q/comment/2cb9eac4dbfd30db1d089bb0f630ad22_2048_2048_80.jpg"
    },
    {
        id: 10,
        name: "湖北省美术院美术馆",
        enName: "Hubei Academy of Fine Arts Museum",
        address: "中山路368号湖北省美术院内",
        district: "wuchang",
        type: "museum",
        description: "湖北省美术院美术馆是展示湖北省美术院教师和学生作品的专业美术馆。",
        openTime: "周二至周日 9:00-17:00",
        ticket: "免费",
        position: [114.306219, 30.584097],
        image: "https://aos-comment.amap.com/B0J6Z5MS57/comment/5575bb0dd190d289a2a2bf3656d6008d_2048_2048_80.jpg"
    },
    {
        id: 11,
        name: "Big House当代艺术中心",
        enName: "Big House Contemporary Art Center",
        address: "积玉桥街办事处蓝湾俊园(西北)临江大道76号蓝湾俊园",
        district: "hankou",
        type: "artspace",
        description: "独立当代艺术空间，致力于推广实验性艺术和前卫艺术实践。",
        openTime: "周二至周日 10:00-18:00",
        ticket: "免费",
        position: [114.306219, 30.584097],
        image: "http://store.is.autonavi.com/showpic/1c190ee69e4e0baaf3839c4686f02a13"
    },
    {
        id: 12,
        name: "卓尔美术馆",
        enName: "Zall Art Museum",
        address: "惠济路3号(香港路地铁站D口步行190米)",
        district: "jiangan",
        type: "museum",
        description: "由卓尔集团创办的私人美术馆，收藏和展示中国当代艺术作品。",
        openTime: "周二至周日 10:00-17:00",
        ticket: "免费",
        position: [114.306219, 30.584097],
        image: "http://store.is.autonavi.com/showpic/9aa92c88a428b057b7bf5944cd75e39b"
    },
    {
        id: 13,
        name: "晨曦艺术馆",
        enName: "Chenxi Art Museum",
        address: "昙华林与胭脂路交叉口西北100米",
        district: "wuchang",
        type: "gallery",
        description: "位于历史文化街区昙华林的小型艺术馆，展示当代艺术和传统工艺。",
        openTime: "周三至周日 10:00-17:00",
        ticket: "免费",
        position: [114.306219, 30.584097],
        image: "https://aos-comment.amap.com/B0FFLGDXPV/comment/34022cb6b2d26bebbd0539ec7f381524_2048_2048_80.jpg"
    }
];

// 使用高德地图API获取更多美术馆数据
function fetchMoreGalleries() {
    console.log("从高德地图API获取更多美术馆数据...");
    
    // 使用高德地图API的POI搜索服务
    AMap.plugin('AMap.PlaceSearch', function() {
        const placeSearch = new AMap.PlaceSearch({
            city: '武汉',
            type: '文化,艺术,美术馆',
            pageSize: 20,
            pageIndex: 1
        });
        
        placeSearch.search('美术馆 艺术馆', function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                const pois = result.poiList.pois;
                // 处理获取到的POI数据
                processPOIData(pois);
            } else {
                console.log("POI搜索失败，使用预设数据");
                // 如果API调用失败，使用我们已经更新的预设数据
                // 不修改英雄区域的文本，保持"更多"文本不变
                // const countElement = document.querySelector('#hero .text-xl .highlight');
                // if (countElement) {
                //     countElement.textContent = `${artGalleries.length}+`;
                // }
                
                // 更新现有艺术馆的图片
                updateExistingGalleryImages();
            }
        });
    });
    
    // 添加一个加载状态提示
    const galleryListContainer = document.getElementById('gallery-list');
    if (galleryListContainer) {
        const loadingElement = document.createElement('div');
        loadingElement.className = 'col-span-12 text-center py-8';
        loadingElement.id = 'gallery-loading';
        loadingElement.innerHTML = '<div class="text-tesla-red"><i class="fas fa-spinner fa-spin fa-2x"></i></div><p class="mt-4">正在加载武汉艺术馆数据...</p>';
        galleryListContainer.appendChild(loadingElement);
        
        // 3秒后移除加载提示，如果还存在的话
        setTimeout(() => {
            const loadingElement = document.getElementById('gallery-loading');
            if (loadingElement) {
                loadingElement.remove();
            }
        }, 3000);
    }
}

// 更新现有艺术馆的图片
function updateExistingGalleryImages() {
    // 为每个艺术馆获取详细信息和图片
    artGalleries.forEach((gallery, index) => {
        // 使用高德地图API的POI搜索服务获取详情
        AMap.plugin('AMap.PlaceSearch', function() {
            const placeSearch = new AMap.PlaceSearch({
                city: '武汉'
            });
            
            placeSearch.search(gallery.name, function(status, result) {
                if (status === 'complete' && result.info === 'OK' && result.poiList.pois.length > 0) {
                    const poi = result.poiList.pois[0];
                    
                    // 如果有图片URL，更新艺术馆数据
                    if (poi.photos) {
                        if (Array.isArray(poi.photos) && poi.photos.length > 0 && poi.photos[0].url) {
                            gallery.image = poi.photos[0].url;
                            // 确保URL是完整的
                            if (gallery.image && !gallery.image.startsWith('http')) {
                                gallery.image = 'http://' + gallery.image;
                            }
                        } else if (poi.photos.url) {
                            gallery.image = poi.photos.url;
                            // 确保URL是完整的
                            if (gallery.image && !gallery.image.startsWith('http')) {
                                gallery.image = 'http://' + gallery.image;
                            }
                        }
                    }
                    
                    // 如果是最后一个艺术馆，更新UI
                    if (index === artGalleries.length - 1) {
                        renderGalleryList(artGalleries);
                        addGalleryMarkers(artGalleries);
                    }
                }
            });
        });
    });
}

// DOM元素
let map;
let userMarker;
let galleryMarkers = [];
let infoWindow;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化地图
    initMap();
    
    // 尝试获取更多美术馆数据
    fetchMoreGalleries();
    
    // 生成艺术馆列表
    renderGalleryList(artGalleries);
    
    // 初始化滚动动效
    initScrollAnimation();
    
    // 绑定筛选事件
    bindFilterEvents();
    
    // 绑定表单提交事件
    document.getElementById('contribution-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('感谢您的贡献！我们将审核您提交的信息。');
        this.reset();
    });
});

// 处理高德地图API返回的POI数据
function processPOIData(pois) {
    if (!pois || pois.length === 0) return;
    
    console.log(`获取到${pois.length}个POI数据点`);
    
    // 获取当前最大ID
    const maxId = Math.max(...artGalleries.map(gallery => gallery.id));
    let newId = maxId + 1;
    
    // 处理每个POI数据
    pois.forEach(poi => {
        // 检查是否已存在相同名称的艺术馆
        const exists = artGalleries.some(gallery => gallery.name === poi.name);
        if (exists) {
            // 如果已存在，更新图片URL
            const existingGallery = artGalleries.find(gallery => gallery.name === poi.name);
            if (existingGallery && poi.photos) {
                // 检查photos字段的结构
                if (Array.isArray(poi.photos) && poi.photos.length > 0 && poi.photos[0].url) {
                    existingGallery.image = poi.photos[0].url;
                    // 确保URL是完整的
                    if (existingGallery.image && !existingGallery.image.startsWith('http')) {
                        existingGallery.image = 'http://' + existingGallery.image;
                    }
                } else if (poi.photos.url) {
                    existingGallery.image = poi.photos.url;
                    // 确保URL是完整的
                    if (existingGallery.image && !existingGallery.image.startsWith('http')) {
                        existingGallery.image = 'http://' + existingGallery.image;
                    }
                }
            }
            return;
        }
        
        // 确定区域
        let district = 'wuchang'; // 默认武昌
        if (poi.address.includes('汉口') || poi.address.includes('江岸') || poi.address.includes('江汉')) {
            district = 'hankou';
        } else if (poi.address.includes('汉阳') || poi.address.includes('琴台')) {
            district = 'hanyang';
        }
        
        // 确定类型
        let type = 'museum';
        if (poi.name.includes('画廊') || poi.name.includes('艺廊')) {
            type = 'gallery';
        } else if (poi.name.includes('艺术中心') || poi.name.includes('艺术空间')) {
            type = 'artspace';
        }
        
        // 获取图片URL
        let imageUrl = `https://via.placeholder.com/300x200.png?text=${encodeURIComponent(poi.name)}`;
        if (poi.photos) {
            // 检查photos字段的结构
            if (Array.isArray(poi.photos) && poi.photos.length > 0 && poi.photos[0].url) {
                imageUrl = poi.photos[0].url;
                // 确保URL是完整的
                if (imageUrl && !imageUrl.startsWith('http')) {
                    imageUrl = 'http://' + imageUrl;
                }
            } else if (poi.photos.url) {
                imageUrl = poi.photos.url;
                // 确保URL是完整的
                if (imageUrl && !imageUrl.startsWith('http')) {
                    imageUrl = 'http://' + imageUrl;
                }
            }
        }
        
        // 创建新的艺术馆对象
        const newGallery = {
            id: newId++,
            name: poi.name,
            enName: translateToEnglish(poi.name),
            address: poi.address,
            district: district,
            type: type,
            description: `${poi.name}是武汉市的一处艺术场所，位于${poi.address}。`,
            openTime: "周二至周日 9:00-17:00",
            ticket: "免费（特展除外）",
            position: poi.location ? [poi.location.lng, poi.location.lat] : [114.3162, 30.5810],
            image: imageUrl
        };
        
        // 添加到艺术馆数组
        artGalleries.push(newGallery);
    });
    
    // 更新地图和列表
    addGalleryMarkers(artGalleries);
    renderGalleryList(artGalleries);
    
    // 不修改英雄区域的文本，保持"更多"文本不变
    // const countElement = document.querySelector('#hero .text-xl .highlight');
    // if (countElement) {
    //     countElement.textContent = `${artGalleries.length}+`;
    // }
}

// 简单的中文到英文翻译函数（仅用于示例）
function translateToEnglish(chineseName) {
    // 这里应该使用专业的翻译API，这里仅做简单处理
    const translations = {
        '美术馆': 'Art Museum',
        '艺术馆': 'Art Gallery',
        '艺术中心': 'Art Center',
        '画廊': 'Gallery',
        '艺术空间': 'Art Space'
    };
    
    // 简单替换
    let englishName = chineseName;
    for (const [cn, en] of Object.entries(translations)) {
        englishName = englishName.replace(cn, en);
    }
    
    // 如果没有变化，添加默认后缀
    if (englishName === chineseName) {
        englishName += ' Art Museum';
    }
    
    return englishName;
}

// 初始化高德地图
function initMap() {
    // 创建地图实例
    map = new AMap.Map('mapContainer', {
        zoom: 12,
        center: [114.3162, 30.5810], // 武汉市中心坐标
        viewMode: '3D',
        mapStyle: 'amap://styles/dark',
        pitch: 15,
        resizeEnable: true, // 启用自动适应容器尺寸变化
        isHotspot: true // 启用热点和标注效果
    });
    
    // 监听窗口大小变化，确保地图自适应
    window.addEventListener('resize', function() {
        map.resize();
    });
    
    // 添加控件
    map.plugin(['AMap.ToolBar', 'AMap.Scale'], function() {
        map.addControl(new AMap.ToolBar());
        map.addControl(new AMap.Scale());
    });
    
    // 创建信息窗体
    infoWindow = new AMap.InfoWindow({
        offset: new AMap.Pixel(0, -30),
        closeWhenClickMap: true
    });
    
    // 添加艺术馆标记
    addGalleryMarkers(artGalleries);
    
    // 绑定定位按钮事件
    document.getElementById('locate-me').addEventListener('click', locateUser);
}

// 添加艺术馆标记
function addGalleryMarkers(galleries) {
    // 清除现有标记
    galleryMarkers.forEach(marker => {
        marker.setMap(null);
    });
    galleryMarkers = [];
    
    // 添加新标记
    galleries.forEach(gallery => {
        const marker = new AMap.Marker({
            position: gallery.position,
            title: gallery.name,
            icon: new AMap.Icon({
                size: new AMap.Size(32, 32),
                image: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png',
                imageSize: new AMap.Size(32, 32)
            }),
            animation: 'AMAP_ANIMATION_DROP',
            extData: gallery
        });
        
        // 点击标记显示信息窗体
        marker.on('click', function() {
            const gallery = this.getExtData();
            showInfoWindow(gallery, this.getPosition());
        });
        
        marker.setMap(map);
        galleryMarkers.push(marker);
    });
    
    // 调整地图视野以包含所有标记
    if (galleryMarkers.length > 0) {
        map.setFitView(galleryMarkers);
        // 确保地图完全填充容器
        setTimeout(() => {
            map.resize();
        }, 200);
    }
}

// 显示信息窗体
function showInfoWindow(gallery, position) {
    const content = `
        <div class="info-window" style="width: 300px; background-color: white;">
            <h3 style="margin: 0 0 5px 0; color: #E31937;">${gallery.name}</h3>
            <p style="margin: 0; font-size: 12px; color: #666;">${gallery.enName}</p>
            <div style="margin: 10px 0;">
                <img src="${gallery.image}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 8px; color: #333;">
                <span style="color: #E31937;">地址：</span>${gallery.address}
            </div>
            <div style="margin-bottom: 8px; color: #333;">
                <span style="color: #E31937;">开放时间：</span>${gallery.openTime}
            </div>
            <div style="margin-bottom: 8px; color: #333;">
                <span style="color: #E31937;">门票：</span>${gallery.ticket}
            </div>
            <div style="margin-bottom: 12px; color: #333;">
                <span style="color: #E31937;">简介：</span>${gallery.description}
            </div>
            <div>
                <button onclick="navigateTo([${position.lng}, ${position.lat}], '${gallery.name}')" 
                    style="background-color: #E31937; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; width: 100%;">
                    <i class="fas fa-directions"></i> 导航到这里
                </button>
            </div>
        </div>
    `;
    
    infoWindow.setContent(content);
    infoWindow.open(map, position);
}

// 导航到艺术馆
function navigateTo(position, name) {
    // 检查是否有用户位置
    if (!userMarker) {
        alert('请先定位您的位置！');
        locateUser();
        return;
    }
    
    const userPos = userMarker.getPosition();
    
    // 先将地图中心设置为目标位置
    map.setCenter(position);
    map.setZoom(15); // 设置适当的缩放级别以便查看目标位置
    
    // 显示路线规划面板
    const routePanel = document.getElementById('route-panel');
    routePanel.classList.remove('hidden');
    routePanel.innerHTML = `
        <h4 class="text-xl font-bold mb-2">路线<span class="highlight">规划</span></h4>
        <div class="text-sm" id="route-info">
            <p><i class="fas fa-spinner fa-spin mr-2"></i> 正在规划到${name}的路线...</p>
        </div>
        <button id="close-route" class="mt-4 text-sm text-tesla-red hover:text-white transition">
            <i class="fas fa-times mr-1"></i> 关闭路线
        </button>
    `;
    
    // 绑定关闭路线按钮事件
    document.getElementById('close-route').addEventListener('click', function() {
        routePanel.classList.add('hidden');
        // 清除路线
        if (window.currentDriving) {
            window.currentDriving.clear();
        }
    });
    
    // 使用高德地图驾车导航
    AMap.plugin('AMap.Driving', function() {
        const driving = new AMap.Driving({
            map: map,
            panel: document.getElementById('route-info'),
            hideMarkers: false,
            autoFitView: true
        });
        
        // 保存当前导航实例，以便后续可以清除
        window.currentDriving = driving;
        
        // 构造路线导航参数
        driving.search(
            [userPos.lng, userPos.lat], // 起点
            position, // 终点
            { waypoints: [] }, // 途经点
            function(status, result) {
                // 导航结果回调
                if (status === 'complete') {
                    // 确保路线完全显示在地图上
                    map.setFitView();
                    
                    // 更新路线信息面板
                    const routeInfo = document.getElementById('route-info');
                    if (result.routes && result.routes.length > 0) {
                        const route = result.routes[0];
                        routeInfo.innerHTML = `
                            <div class="mb-2">
                                <span class="text-tesla-red">距离：</span>${(route.distance/1000).toFixed(1)}公里
                            </div>
                            <div class="mb-2">
                                <span class="text-tesla-red">预计时间：</span>${Math.ceil(route.time/60)}分钟
                            </div>
                            <div class="mb-4">
                                <span class="text-tesla-red">路线概览：</span>${route.steps.length}段行程
                            </div>
                            <div class="route-steps max-h-40 overflow-auto">
                                ${route.steps.map((step, index) => `
                                    <div class="mb-2 pb-2 border-b border-gray-800">
                                        <div class="flex">
                                            <div class="mr-2 text-tesla-red">${index + 1}.</div>
                                            <div>${step.instruction}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        `;
                    }
                } else {
                    document.getElementById('route-info').innerHTML = `<p class="text-red-500">导航失败，请稍后再试</p>`;
                }
            }
        );
    });
}

// 定位用户位置
function locateUser() {
    map.plugin('AMap.Geolocation', function() {
        const geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,
            timeout: 10000,
            buttonPosition: 'RB',
            buttonOffset: new AMap.Pixel(10, 20),
            zoomToAccuracy: true
        });
        
        map.addControl(geolocation);
        geolocation.getCurrentPosition(function(status, result) {
            if (status === 'complete') {
                // 定位成功
                const position = result.position;
                
                // 添加或更新用户位置标记
                if (userMarker) {
                    userMarker.setPosition(position);
                } else {
                    userMarker = new AMap.Marker({
                        position: position,
                        icon: new AMap.Icon({
                            size: new AMap.Size(32, 32),
                            image: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
                            imageSize: new AMap.Size(32, 32)
                        }),
                        zIndex: 100
                    });
                    userMarker.setMap(map);
                }
                
                // 将地图中心移动到用户位置
                map.setCenter(position);
                map.setZoom(14);
                
                // 显示用户位置信息窗体
                const infoWindow = new AMap.InfoWindow({
                    content: '<div style="text-align: center;">您的位置</div>',
                    offset: new AMap.Pixel(0, -30)
                });
                infoWindow.open(map, position);
            } else {
                // 定位失败
                alert('定位失败，请检查您的位置权限设置');
            }
        });
    });
}

// 渲染艺术馆列表
function renderGalleryList(galleries) {
    const galleryListContainer = document.getElementById('gallery-list');
    galleryListContainer.innerHTML = '';
    
    galleries.forEach(gallery => {
        const galleryCard = document.createElement('div');
        galleryCard.className = 'col-span-12 md:col-span-4 mb-8 reveal';
        galleryCard.style.transitionDelay = `${0.1 * (galleries.indexOf(gallery) % 3)}s`;
        
        galleryCard.innerHTML = `
            <div class="art-gallery-card h-full flex flex-col">
                <div class="relative">
                    <img src="${gallery.image}" alt="${gallery.name}" class="w-full h-48 object-cover rounded-t-lg">
                    <div class="absolute top-0 right-0 bg-tesla-red text-white text-xs font-bold px-2 py-1 m-2 rounded">
                        ${gallery.type === 'museum' ? '美术馆' : gallery.type === 'gallery' ? '画廊' : '艺术空间'}
                    </div>
                </div>
                <div class="p-6 flex-grow">
                    <h3 class="text-xl font-bold mb-1">${gallery.name}</h3>
                    <p class="text-sm text-gray-400 mb-3">${gallery.enName}</p>
                    <p class="text-sm mb-3"><i class="fas fa-map-marker-alt text-tesla-red mr-2"></i>${gallery.address}</p>
                    <p class="text-sm mb-3"><i class="fas fa-clock text-tesla-red mr-2"></i>${gallery.openTime}</p>
                    <p class="text-sm">${gallery.description.substring(0, 80)}${gallery.description.length > 80 ? '...' : ''}</p>
                </div>
                <div class="p-6 pt-0 mt-auto">
                    <button class="nav-button w-full" onclick="showGalleryOnMap(${gallery.id})">
                        <i class="fas fa-map-marked-alt mr-2"></i> 在地图中查看
                    </button>
                </div>
            </div>
        `;
        
        galleryListContainer.appendChild(galleryCard);
    });
    
    // 重新初始化滚动动效
    initScrollAnimation();
}

// 在地图中显示指定艺术馆
function showGalleryOnMap(galleryId) {
    const gallery = artGalleries.find(g => g.id === galleryId);
    if (gallery) {
        // 滚动到地图部分
        document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
        
        // 延迟一下再定位到艺术馆，确保滚动完成
        setTimeout(() => {
            // 找到对应的标记
            const marker = galleryMarkers.find(m => m.getExtData().id === galleryId);
            if (marker) {
                // 设置地图中心为艺术馆位置
                map.setCenter(marker.getPosition());
                map.setZoom(16);
                
                // 显示信息窗体
                showInfoWindow(gallery, marker.getPosition());
            }
        }, 800);
    }
}

// 绑定筛选事件
function bindFilterEvents() {
    const districtFilter = document.getElementById('district-filter');
    const typeFilter = document.getElementById('type-filter');
    const searchInput = document.getElementById('search-input');
    
    // 区域筛选
    districtFilter.addEventListener('change', applyFilters);
    
    // 类型筛选
    typeFilter.addEventListener('change', applyFilters);
    
    // 搜索筛选
    searchInput.addEventListener('input', applyFilters);
}

// 应用筛选条件
function applyFilters() {
    const districtFilter = document.getElementById('district-filter').value;
    const typeFilter = document.getElementById('type-filter').value;
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    
    // 筛选艺术馆
    const filteredGalleries = artGalleries.filter(gallery => {
        // 区域筛选
        const districtMatch = districtFilter === 'all' || gallery.district === districtFilter;
        
        // 类型筛选
        const typeMatch = typeFilter === 'all' || gallery.type === typeFilter;
        
        // 搜索筛选
        const searchMatch = gallery.name.toLowerCase().includes(searchInput) || 
                           gallery.enName.toLowerCase().includes(searchInput) ||
                           gallery.address.toLowerCase().includes(searchInput);
        
        return districtMatch && typeMatch && searchMatch;
    });
    
    // 更新地图标记
    addGalleryMarkers(filteredGalleries);
    
    // 更新艺术馆列表
    renderGalleryList(filteredGalleries);
}

// 初始化滚动动效 - Apple风格
function initScrollAnimation() {
    const reveals = document.querySelectorAll('.reveal');
    const parallaxElements = document.querySelectorAll('.parallax');
    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    const scaleElements = document.querySelectorAll('.scale-on-scroll');
    
    // 基础显示动画
    const revealElements = function() {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
        
        // 视差滚动效果
        parallaxElements.forEach(element => {
            const scrollPosition = window.scrollY;
            const elementTop = element.offsetTop;
            const windowHeight = window.innerHeight;
            
            // 计算元素在视口中的位置比例
            const scrollPercentage = (scrollPosition - (elementTop - windowHeight)) / windowHeight;
            
            if (scrollPercentage >= 0 && scrollPercentage <= 1) {
                const translateY = scrollPercentage * -50; // 向上移动的距离
                element.style.transform = `translateY(${translateY}px)`;
            }
        });
        
        // 渐变淡入效果
        fadeElements.forEach(element => {
            const scrollPosition = window.scrollY;
            const elementTop = element.offsetTop;
            const windowHeight = window.innerHeight;
            
            const scrollPercentage = (scrollPosition - (elementTop - windowHeight)) / windowHeight;
            
            if (scrollPercentage >= 0 && scrollPercentage <= 1) {
                const opacity = Math.min(1, scrollPercentage * 1.5);
                element.style.opacity = opacity;
            }
        });
        
        // 缩放效果
        scaleElements.forEach(element => {
            const scrollPosition = window.scrollY;
            const elementTop = element.offsetTop;
            const windowHeight = window.innerHeight;
            
            const scrollPercentage = (scrollPosition - (elementTop - windowHeight)) / windowHeight;
            
            if (scrollPercentage >= 0 && scrollPercentage <= 1) {
                const scale = 0.8 + (scrollPercentage * 0.2); // 从0.8缩放到1.0
                element.style.transform = `scale(${scale})`;
            }
        });
    };
    
    // 初始检查
    revealElements();
    
    // 滚动时检查 - 使用requestAnimationFrame优化性能
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                revealElements();
                ticking = false;
            });
            ticking = true;
        }
    });
}

// 统计各区艺术馆数量和比例
function getDistrictStats(galleries) {
    const districtMap = {
        wuchang: "武昌",
        hankou: "汉口",
        hanyang: "汉阳",
        caidian: "蔡甸",
        jiangan: "江岸/江汉"
    };
    const stats = {};
    let total = 0;
    galleries.forEach(g => {
        const d = g.district;
        if (!stats[d]) stats[d] = 0;
        stats[d]++;
        total++;
    });
    // 生成比例数组
    return Object.entries(stats).map(([k, v]) => ({
        key: k,
        name: districtMap[k] || k,
        count: v,
        percent: Math.round((v / total) * 100)
    })).sort((a, b) => b.count - a.count);
}

// 渲染分布条
function renderDistrictBars(stats) {
    const container = document.getElementById('district-bars');
    if (!container) return;
    container.innerHTML = '';
    stats.forEach(s => {
        const bar = document.createElement('div');
        bar.className = 'flex items-center mb-4';
        bar.innerHTML = `
            <div class="w-full bg-gray-700 rounded-full h-2.5">
                <div class="bg-tesla-red h-2.5 rounded-full" style="width: ${s.percent}%"></div>
            </div>
            <span class="ml-4 min-w-[80px]">${s.name} ${s.percent}%</span>
        `;
        container.appendChild(bar);
    });
}

// SVG地图分布可视化
function renderDistrictMap(stats) {
    const svg = document.getElementById('district-map-svg');
    if (!svg) return;
    // 清空
    svg.innerHTML = '';
    // 区域点位
    const points = {
        wuchang: {x: 120, y: 80},
        hankou: {x: 60, y: 60},
        hanyang: {x: 80, y: 140},
        caidian: {x: 30, y: 160},
        jiangan: {x: 150, y: 40}
    };
    // 画外圈
    svg.innerHTML += '<ellipse cx="90" cy="100" rx="80" ry="70" stroke="#E31937" stroke-width="2" fill="none" />';
    // 画点和文字
    stats.forEach(s => {
        const pt = points[s.key] || {x: 100, y: 100};
        svg.innerHTML += `<circle cx="${pt.x}" cy="${pt.y}" r="${18 + s.percent/2}" fill="rgba(227,25,55,0.7)" />`;
        svg.innerHTML += `<text x="${pt.x}" y="${pt.y - 25}" fill="#fff" font-size="16" font-weight="bold" text-anchor="middle">${s.name}</text>`;
        svg.innerHTML += `<text x="${pt.x}" y="${pt.y + 30}" fill="#E31937" font-size="18" font-weight="bold" text-anchor="middle">${s.percent}%</text>`;
    });
}

// 初始化分布统计
function initDistrictOverview() {
    const stats = getDistrictStats(artGalleries);
    renderDistrictBars(stats);
    renderDistrictMap(stats);
}

// 页面加载后初始化分布统计
window.addEventListener('DOMContentLoaded', () => {
    initDistrictOverview();
});