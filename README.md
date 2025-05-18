# 武汉艺术主题POI地图

## 核心实现：MCP + AMap 的 5 个关键步骤

### 1 关键词检索 → POI

```js
// MCP🔍：keywords => POI list
AMap.plugin('AMap.PlaceSearch', () => {
  const search = new AMap.PlaceSearch({
    city: '武汉',
    type: '文化,艺术,美术馆',
    pageSize: 20
  })
  search.search('美术馆 艺术馆', (status, res) => { ... })
})
```

> MCP 返回结构化字段：`location` / `address` / `photos` / `biz_ext.open_time`，一次性解决“坐标 + 图片 + 营业时间”。

---

### 2 POI 清洗与分区标注

- **区县映射**：正则判断地址包含“汉口/江岸”→ `hankou`
- **类型归并**：name 包含“画廊”→ `gallery` 等
- **去重逻辑**：同名 POI 直接更新图片，不重复插入

📍 代码位置：`main.js > processPOIData()`

---

### 3 地图渲染与信息窗体

```js
const marker = new AMap.Marker({
  position: gallery.position,
  icon: new AMap.Icon({
    image: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png',
    size : new AMap.Size(32,32)
  }),
  extData: gallery
})
marker.on('click', () => showInfoWindow(gallery))
```

> `InfoWindow` 中展示大图、简介、开放时间、地址、导航按钮。

---

### 4 交互：筛选 / 搜索 / 导航

- **筛选**：`district + type + keyword` 三条件数组过滤 → 重新渲染 Marker & 列表
- **导航**：调用 `AMap.Driving.search(start, end)` 生成驾车路线
- **定位**：使用 `AMap.Geolocation.getCurrentPosition()` 获取用户当前位置

---

### 5 数据可视化：SVG + Chart

- 统计各区 POI 数量 → 条形进度条展示比例
- 使用 `#district-map-svg` 手绘椭圆 + 红点气泡图
- 比例大小 = 区域占比百分比，直观展示艺术资源分布

📍 实现函数：`renderDistrictBars()` + `renderDistrictMap()`

---

## 踩坑 & 优化

| 问题 | 解决方案 |
| ---- | -------- |
| 大量 Marker 首次加载卡顿 | 先渲染核心 POI，再懒加载长尾；`setFitView()` 之后调用 `map.resize()` |
| MCP 返回部分 POI 无图 | 若 `photos` 为空 → 使用占位图 `https://via.placeholder.com/...` |
| 地址解析不准 | 结合 `biz_ext.city` 字段做校正 |
| 移动端适配困难 | 用 `padding-bottom: 75%` 保持 16:9 比例自适应容器 |

---
![8cd423bf731f66ab31c73e1f6c73903](https://github.com/user-attachments/assets/d68d7a23-9bc4-41a5-b062-f60bff2c0bca)
