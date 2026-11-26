<div align="center">
  <h1>武汉艺术地图 · Wuhan Art Map</h1>
  <p><strong>以地图为入口，探索武汉的美术馆、画廊与城市艺术空间。</strong></p>
  <p>Discover Wuhan through its art museums, galleries and creative spaces.</p>
  <p>
    <a href="#项目介绍">项目介绍</a> ·
    <a href="#核心功能">核心功能</a> ·
    <a href="#技术实现">技术实现</a> ·
    <a href="#本地运行">本地运行</a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/WebGIS-AMap-9E3838" alt="WebGIS AMap">
    <img src="https://img.shields.io/badge/JavaScript-ES6%2B-454545" alt="JavaScript ES6+">
    <img src="https://img.shields.io/badge/UI-Tailwind%20CSS-454545" alt="Tailwind CSS">
  </p>
</div>

## 项目介绍

武汉艺术地图是一款面向城市艺术资源探索的交互式 WebGIS 应用。项目将分散的艺术场馆信息组织在统一的地图与列表中，结合空间分布可视化、分类检索和位置服务，为了解武汉的城市艺术空间提供直观入口。

## 核心功能

| 功能 | 说明 |
| --- | --- |
| 交互式地图 | 基于高德地图呈现艺术场馆位置，支持地图缩放、平移及点位交互。 |
| 多维筛选 | 按区域、场馆类型及关键词筛选，地图与列表同步更新。 |
| 场馆详情 | 展示场馆名称、图片、简介、地址及开放时间等信息。 |
| 位置服务 | 获取用户授权的当前位置，并调用高德驾车路线规划。 |
| 空间分布 | 通过区域统计条形图与 SVG 示意图展示艺术资源分布。 |
| 响应式界面 | 结合 Tailwind CSS 与滚动动效，适配不同屏幕尺寸。 |

## 技术实现

当前仓库使用 `js/main.js` 中预设的艺术场馆数据。早期 MCP + AMap 方案用于探索关键词检索与 POI 整理；运行时动态 POI 查询和图片更新目前已停用。

### 1. POI 检索与数据整理

早期设计使用高德地点搜索能力获取艺术主题 POI，并围绕坐标、地址、图片及开放时间建立数据结构。

```js
AMap.plugin('AMap.PlaceSearch', () => {
  const search = new AMap.PlaceSearch({
    city: '武汉',
    type: '文化,艺术,美术馆',
    pageSize: 20
  })
  search.search('美术馆 艺术馆', (status, res) => {
    // 处理地点搜索结果
  })
})
```

早期数据整理思路包括地址分区、场馆类型归并与同名 POI 去重。相关字段包括 `location`、`address`、`photos` 和 `biz_ext.open_time`，具体可用性取决于数据源。当前版本直接渲染预设数据，不执行上述动态搜索。

### 2. 地图渲染与信息窗体

通过 `AMap.Marker` 将艺术场馆与空间位置关联，点击地图标记后打开详情窗体，展示场馆信息。

相关实现：`initMap()`、`addGalleryMarkers()`、`showInfoWindow()`。

### 3. 筛选、搜索与导航

区域、类型及关键词共同参与过滤，筛选结果同步更新地图标记与场馆列表。定位和驾车路线分别使用 `AMap.Geolocation` 与 `AMap.Driving`。

相关实现：`applyFilters()`、`locateUser()`、`navigateTo()`。

### 4. 空间统计与可视化

通过区域 POI 计数计算占比，以条形进度与 SVG 气泡示意图呈现艺术资源的区域分布。SVG 为示意表达，并非精确行政区划地图。

相关实现：`getDistrictStats()`、`renderDistrictBars()`、`renderDistrictMap()`。

<details>
<summary>开发经验与优化思路</summary>

| 问题 | 设计与优化思路 |
| --- | --- |
| 大量 Marker 首次加载卡顿 | 分批渲染点位，并结合地图尺寸调整优化展示。 |
| POI 图片缺失 | 早期方案考虑使用占位图，当前版本采用预设图片。 |
| 地址解析不准 | 早期方案考虑结合地址与城市字段校正。 |
| 移动端适配 | 通过响应式布局及地图容器尺寸管理改善展示。 |

</details>

## 本地运行

项目为静态前端应用，无需安装 Node.js 依赖或启动后端服务。

```bash
git clone https://github.com/oldjie/Wuhan-Art-Map.git
cd Wuhan-Art-Map
python -m http.server 8000
```

在浏览器中访问 `http://localhost:8000`。

地图、定位与路线规划依赖高德地图服务及有效的 Web 端 API 配置。部署时请在 `index.html` 中配置自己的高德应用凭据，遵循平台安全要求；外部 CDN 和图片资源需要网络连接。浏览器定位需要用户授权。

## 项目结构

```text
Wuhan-Art-Map/
├── index.html           # 页面结构、样式与地图 API 配置
├── js/
│   └── main.js          # POI 数据、地图交互、筛选与统计
├── hero_background.jpg  # 页面视觉背景
└── README.md
```

## 数据说明与反馈

场馆信息来源于公开资料整理，开放时间、地址及实际运营状态可能变化，请以场馆官方信息为准。地图及第三方图片遵循相应服务和权利人的使用规则。

欢迎通过 [GitHub Issues](https://github.com/oldjie/Wuhan-Art-Map/issues) 提交场馆信息纠正、功能建议与问题反馈。

## 更多

详细的项目设计与技术实现介绍见：[AI + 高德MCP，我做了一张「武汉艺术地图」](https://blog.csdn.net/hbw68/article/details/148048351?spm=1001.2014.3001.5502)。

---

<div align="center">
  <sub>Wuhan Art Map · A spatial perspective on urban art.</sub>
</div>
