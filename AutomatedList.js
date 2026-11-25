/**
 * 玛卡巴卡云端剧场 Forward Widget
 * 聚合骨朵、豆瓣、精选剧场、热门番剧、芒果TV、FlixPatrol 与动画疯榜单
 */

var WidgetMetadata = {
  id: "makkapakka_hub_list_2.0",
  title: "平台剧场",
  description: "骨朵、平台剧场、流媒体 TOP 10、爱优腾芒哔看点与动画疯人气榜",
  author: "𝙈𝙖𝙠𝙠𝙖𝙋𝙖𝙠𝙠𝙖",
  site: "https://t.me/MakkaPakkaOvO",
  version: "2.1.2",
  requiredVersion: "0.0.1",

  modules: [
    {
      title: "豆瓣热榜",
      description: "豆瓣实时热门影剧综",
      functionName: "loadDouban",
      type: "media_list",
      cacheDuration: 43200,
      params: [
        {
          name: "channel",
          title: "榜单分类",
          type: "enum",
          value: "tv",
          enumOptions: [
            { title: "全部剧集", value: "tv" },
            { title: "大陆剧集", value: "tv_domestic" },
            { title: "欧美剧集", value: "tv_american" },
            { title: "日本剧集", value: "tv_japanese" },
            { title: "南韩剧集", value: "tv_korean" },
            { title: "动漫番剧", value: "tv_animation" },
            { title: "纪录片", value: "tv_documentary" },
            { title: "大陆综艺", value: "show_domestic" },
            { title: "国外综艺", value: "show_foreign" }
          ]
        },
        {
          name: "sort_type",
          title: "排序方式",
          type: "enum",
          value: "default",
          enumOptions: [
            { title: "默认原序", value: "default" },
            { title: "最近更新", value: "updated" },
            { title: "最近发布", value: "recent" },
            { title: "热度最高", value: "heat" },
            { title: "流行趋势", value: "trending" },
            { title: "高分优先", value: "rating" }
          ]
        },
        {
          name: "page",
          title: "页码",
          type: "page",
          startPage: 1
        },
        { name: "language", title: "语言", type: "language", value: "zh-CN" }
      ]
    },
    {
      title: "豆瓣热榜-热评",
      description: "豆瓣实时热门，简介替换为该条目的豆瓣热评",
      functionName: "loadDoubanComments",
      type: "media_list",
      cacheDuration: 43200,
      params: [
        {
          name: "channel",
          title: "榜单分类",
          type: "enum",
          value: "tv",
          enumOptions: [
            { title: "全部剧集", value: "tv" },
            { title: "大陆剧集", value: "tv_domestic" },
            { title: "欧美剧集", value: "tv_american" },
            { title: "日本剧集", value: "tv_japanese" },
            { title: "南韩剧集", value: "tv_korean" },
            { title: "动漫番剧", value: "tv_animation" },
            { title: "纪录片", value: "tv_documentary" },
            { title: "大陆综艺", value: "show_domestic" },
            { title: "国外综艺", value: "show_foreign" }
          ]
        },
        {
          name: "sort_type",
          title: "排序方式",
          type: "enum",
          value: "default",
          enumOptions: [
            { title: "默认原序", value: "default" },
            { title: "最近更新", value: "updated" },
            { title: "最近发布", value: "recent" },
            { title: "热度最高", value: "heat" },
            { title: "流行趋势", value: "trending" },
            { title: "高分优先", value: "rating" }
          ]
        },
        {
          name: "page",
          title: "页码",
          type: "page",
          startPage: 1
        },
        { name: "language", title: "语言", type: "language", value: "zh-CN" }
      ]
    },
    {
      title: "各平台剧场",
      description: "网路平台剧场榜单",
      functionName: "loadTheater",
      type: "media_list",
      cacheDuration: 43200,
      params: [
        {
          name: "brand",
          title: "剧场品牌",
          type: "enum",
          value: "迷雾剧场",
          enumOptions: [
            { title: "迷雾剧场", value: "迷雾剧场" },
            { title: "白夜剧场", value: "白夜剧场" },
            { title: " X 剧场", value: "X剧场" },
            { title: "玛卡的片单", value: "玛卡巴卡的悬疑剧" },
            { title: "横屏短剧", value: "横屏短剧" },
            { title: "生花剧场", value: "生花剧场" },
            { title: "大家剧场", value: "大家剧场" },
            { title: "小逗剧场", value: "小逗剧场" },
            { title: "十分剧场", value: "十分剧场" },
            { title: "板凳单元", value: "板凳单元" },
            { title: "萤火单元", value: "萤火单元" },
            { title: "正午阳光", value: "正午阳光" },
            { title: "恋恋剧场", value: "恋恋剧场" },
            { title: "悬疑剧场", value: "悬疑剧场" },
            { title: "微尘剧场", value: "微尘剧场" }
          ]
        },
        {
          name: "status",
          title: "播出状态",
          type: "enum",
          value: "all",
          enumOptions: [
            { title: "全部", value: "all" },
            { title: "已开播", value: "aired" },
            { title: "即将推出", value: "upcoming" }
          ]
        },
        {
          name: "sort_type",
          title: "排序方式",
          type: "enum",
          value: "default",
          enumOptions: [
            { title: "默认原序", value: "default" },
            { title: "最近更新", value: "updated" },
            { title: "最近发布", value: "recent" },
            { title: "热度最高", value: "heat" },
            { title: "流行趋势", value: "trending" },
            { title: "高分优先", value: "rating" }
          ]
        },
        {
          name: "page",
          title: "页码",
          type: "page",
          startPage: 1
        },
        { name: "language", title: "语言", type: "language", value: "zh-CN" }
      ]
    },
    {
      title: "热门番剧",
      description: "Bangumi 实时热榜",
      functionName: "loadBangumi",
      type: "media_list",
      cacheDuration: 43200,
      params: [
        {
          name: "genre",
          title: "番剧类型",
          type: "enum",
          value: "",
          enumOptions: [
            { title: "全部", value: "" },
            { title: "动作", value: "28" },
            { title: "冒险", value: "12" },
            { title: "动画", value: "16" },
            { title: "喜剧", value: "35" },
            { title: "奇幻", value: "14" },
            { title: "剧情", value: "18" },
            { title: "科幻", value: "878" },
            { title: "悬疑", value: "9648" }
          ]
        },
        {
          name: "sort_type",
          title: "排序方式",
          type: "enum",
          value: "default",
          enumOptions: [
            { title: "默认原序", value: "default" },
            { title: "最近更新", value: "updated" },
            { title: "最近发布", value: "recent" },
            { title: "热度最高", value: "heat" },
            { title: "流行趋势", value: "trending" },
            { title: "高分优先", value: "rating" }
          ]
        },
        {
          name: "page",
          title: "页码",
          type: "page",
          startPage: 1
        },
        { name: "language", title: "语言", type: "language", value: "zh-CN" }
      ]
    },
    {
      title: "芒果TV热榜",
      description: "最新芒果TV热播剧集与综艺",
      functionName: "loadMangoTV",
      type: "media_list",
      cacheDuration: 43200,
      params: [
        {
          name: "sort_by",
          title: "类型",
          type: "enum",
          value: "tv",
          enumOptions: [
            { title: "全部剧集", value: "tv" },
            { title: "王牌综艺", value: "show" }
          ]
        },
        {
          name: "sort_type",
          title: "排序方式",
          type: "enum",
          value: "default",
          enumOptions: [
            { title: "默认原序", value: "default" },
            { title: "最近更新", value: "updated" },
            { title: "最近发布", value: "recent" },
            { title: "热度最高", value: "heat" },
            { title: "流行趋势", value: "trending" },
            { title: "高分优先", value: "rating" }
          ]
        },
        {
          name: "page",
          title: "页码",
          type: "page",
          startPage: 1
        },
        { name: "language", title: "语言", type: "language", value: "zh-CN" }
      ]
    },
    {
      title: "流媒体 TOP 10",
      description: "FlixPatrol 全球与主要地区榜单",
      functionName: "loadFlixPatrol",
      type: "media_list",
      cacheDuration: 3600,
      params: [
        {
          name: "country",
          title: "国家/地区",
          type: "enum",
          value: "united-states",
          enumOptions: [
            { title: "全球", value: "world" },
            { title: "美国", value: "united-states" },
            { title: "台湾", value: "taiwan" },
            { title: "香港", value: "hong-kong" },
            { title: "新加坡", value: "singapore" },
            { title: "韩国", value: "south-korea" },
            { title: "日本", value: "japan" }
          ]
        },
        {
          name: "platform",
          title: "流媒体平台",
          type: "enum",
          value: "netflix",
          enumOptions: [
            { title: "全部平台", value: "all" },
            { title: "Netflix", value: "netflix" },
            { title: "Disney+", value: "disney" },
            { title: "Apple TV", value: "apple-tv" },
            { title: "Amazon Prime", value: "amazon-prime" },
            { title: "HBO Max", value: "hbo-max" },
            { title: "Paramount+", value: "paramount-plus" },
            { title: "Hulu", value: "hulu" },
            { title: "Peacock", value: "peacock" }
          ]
        },
        {
          name: "chart",
          title: "榜单类型",
          type: "enum",
          value: "all",
          enumOptions: [
            { title: "电影 + 剧集", value: "all" },
            { title: "电影 TOP 10", value: "movies" },
            { title: "剧集 TOP 10", value: "tv" },
            { title: "综合 TOP 10", value: "overall" },
            { title: "儿童电影", value: "kids_movies" },
            { title: "儿童剧集", value: "kids_tv" }
          ]
        },
        { name: "page", title: "页码", type: "page", startPage: 1 },
        { name: "language", title: "语言", type: "language", value: "zh-CN" }
      ]
    },
    {
      title: "流媒体 TOP 10（排名）",
      description: "FlixPatrol 真排名次，配合排名卡片使用",
      functionName: "loadFlixPatrolRanked",
      type: "media_list",
      cacheDuration: 3600,
      params: [
        {
          name: "country",
          title: "国家/地区",
          type: "enum",
          value: "united-states",
          enumOptions: [
            { title: "全球", value: "world" },
            { title: "美国", value: "united-states" },
            { title: "台湾", value: "taiwan" },
            { title: "香港", value: "hong-kong" },
            { title: "新加坡", value: "singapore" },
            { title: "韩国", value: "south-korea" },
            { title: "日本", value: "japan" }
          ]
        },
        {
          name: "platform",
          title: "流媒体平台",
          type: "enum",
          value: "netflix",
          enumOptions: [
            { title: "Netflix", value: "netflix" },
            { title: "Disney+", value: "disney" },
            { title: "Apple TV", value: "apple-tv" },
            { title: "Amazon Prime", value: "amazon-prime" },
            { title: "HBO Max", value: "hbo-max" },
            { title: "Paramount+", value: "paramount-plus" },
            { title: "Hulu", value: "hulu" },
            { title: "Peacock", value: "peacock" }
          ]
        },
        {
          name: "chart",
          title: "榜单类型",
          type: "enum",
          value: "tv",
          enumOptions: [
            { title: "剧集 TOP 10", value: "tv" },
            { title: "电影 TOP 10", value: "movies" }
          ]
        },
        { name: "language", title: "语言", type: "language", value: "zh-CN" }
      ]
    },
    {
      title: "爱优腾芒哔-看点",
      description: "爱奇艺/优酷/腾讯/芒果看点，动漫另含哔哩哔哩国创榜；带类型标签，可筛选排序",
      functionName: "loadQqTeaserMerged",
      type: "media_list",
      // 数据每天 11:30 更新；芒果现场抓取较慢，保持 12 小时缓存，需要时由用户手动清理。
      cacheDuration: 43200,
      params: [
        {
          name: "channel",
          title: "频道",
          type: "enum",
          value: "tv",
          enumOptions: [
            { title: "电视剧", value: "tv" },
            { title: "电影", value: "movie" },
            { title: "动漫", value: "anime" },
            { title: "综艺", value: "variety" }
          ]
        },
        {
          name: "tag",
          title: "类型标签",
          type: "input",
          value: "all",
          placeholders: [
            { title: "全部标签", value: "all" },
            { title: "古装", value: "古装" },
            { title: "悬疑", value: "悬疑" },
            { title: "爱情", value: "爱情" },
            { title: "喜剧", value: "喜剧" },
            { title: "都市", value: "都市" },
            { title: "家庭", value: "家庭" },
            { title: "动作", value: "动作" },
            { title: "科幻", value: "科幻" },
             { title: "动画", value: "动画" },
             { title: "哔哩哔哩国创", value: "哔哩哔哩国创" },
            { title: "游戏节目", value: "游戏节目" },
            { title: "真人秀", value: "真人秀" },
            { title: "纪录", value: "纪录" }
          ]
        },
        {
          name: "sort",
          title: "排序",
          type: "enum",
          value: "heat",
          enumOptions: [
            { title: "热度优先", value: "heat" },
            { title: "最近更新", value: "updated" },
            { title: "最新上线", value: "new" },
            { title: "高分优先", value: "rating" }
          ]
        },
        { name: "page", title: "页码", type: "page", startPage: 1 },
        { name: "language", title: "语言", type: "language", value: "zh-CN" }
      ]
    },
    {
      title: "骨朵热榜",
      description: "每日全网剧集、动漫、综艺与电影榜单",
      functionName: "loadGuduo",
      type: "media_list",
      cacheDuration: 21600,
      params: [
        {
          name: "category",
          title: "榜单分类",
          type: "enum",
          value: "剧集",
          enumOptions: [
            { title: "陆剧", value: "剧集" },
            { title: "国漫", value: "动漫" },
            { title: "综艺", value: "综艺" },
            { title: "电影", value: "电影" }
          ]
        },
        { name: "page", title: "页码", type: "page", startPage: 1 },
        { name: "language", title: "语言", type: "language", value: "zh-CN" }
      ]
    },
    {
      title: "动画疯人气榜",
      description: "GitHub 定时抓取的月人气与年份榜",
      functionName: "loadAniGamer",
      type: "media_list",
      cacheDuration: 3600,
      params: [
        { name: "sort", title: "排序", type: "enum", value: "monthly", enumOptions: [{ title: "月人气排行", value: "monthly" }, { title: "年份排序", value: "yearly" }] },
        { name: "filter", title: "筛选方式", type: "enum", value: "all", belongTo: { paramName: "sort", value: ["monthly"] }, enumOptions: [{ title: "全部", value: "all" }, { title: "属性", value: "tags" }, { title: "类型", value: "categories" }, { title: "对象", value: "targets" }] },
        { name: "tag", title: "属性", type: "enum", value: "动作", belongTo: { paramName: "filter", value: ["tags"] }, enumOptions: ["动作", "冒险", "奇幻", "异世界", "科幻", "校园", "喜剧", "恋爱", "悬疑", "运动", "特摄", "BL", "GL"].map(value => ({ title: value, value })) },
        { name: "category", title: "类型", type: "enum", value: "电影", belongTo: { paramName: "filter", value: ["categories"] }, enumOptions: ["电影", "OVA", "双语", "泡面番", "真人演出"].map(value => ({ title: value, value })) },
        { name: "target", title: "对象", type: "enum", value: "阖家观赏", belongTo: { paramName: "filter", value: ["targets"] }, enumOptions: ["阖家观赏", "付费会员", "年龄限制"].map(value => ({ title: value, value })) },
        { name: "page", title: "页码", type: "page", startPage: 1 },
        { name: "language", title: "语言", type: "language", value: "zh-CN" }
      ]
    }
  ]
};

// ============================================
// Handler Functions
// ============================================

const Utils = {
  emptyTips: [{ id: "empty", type: "text", title: "⚠️ 加载失败", description: "请检查网络连线" }],

  async fetch(filename) {
    const url = `https://raw.githubusercontent.com/MakkaPakka518/List/refs/heads/main/data/${filename}`;
    try {
      const resp = await Widget.http.get(url, { decodable: true });
      if (!resp?.data) return this.emptyTips;
      return typeof resp.data === "string" ? JSON.parse(resp.data) : resp.data;
    } catch (e) {
      console.error(`[Error] ${url}: ${e.message}`);
      return this.emptyTips;
    }
  },

  // 完全纯本地的同步排序逻辑，速度极快
  sortList(list, sortType) {
    if (!list || !Array.isArray(list) || list.length === 0) return list || [];
    if (!sortType || sortType === "default") return list;

    // 复制数组以防污染原数据
    return [...list].sort((a, b) => {
      switch (sortType) {
        case "updated":
          // 优先取爬虫抓好的 lastUpdateDate，如果没有则回退到 releaseDate (首播)
          const updateA = a.lastUpdateDate ? new Date(a.lastUpdateDate).getTime() : (a.releaseDate ? new Date(a.releaseDate).getTime() : 0);
          const updateB = b.lastUpdateDate ? new Date(b.lastUpdateDate).getTime() : (b.releaseDate ? new Date(b.releaseDate).getTime() : 0);
          return updateB - updateA;
        case "recent":
          const dateA = a.releaseDate ? new Date(a.releaseDate).getTime() : 0;
          const dateB = b.releaseDate ? new Date(b.releaseDate).getTime() : 0;
          return dateB - dateA;
        case "heat":
          const heatA = parseFloat(a.voteCount || a.vote_count) || 0;
          const heatB = parseFloat(b.voteCount || b.vote_count) || 0;
          return heatB - heatA;
        case "trending":
          const trendA = parseFloat(a.popularity) || 0;
          const trendB = parseFloat(b.popularity) || 0;
          return trendB - trendA;
        case "rating":
          const rateA = parseFloat(a.rating) || 0;
          const rateB = parseFloat(b.rating) || 0;
          return rateB - rateA;
        default:
          return 0;
      }
    });
  },

  paginate(list, pageNum, pageSize = 24) {
    if (!list || !Array.isArray(list)) return [];
    const p = parseInt(pageNum) || 1;
    const start = (p - 1) * pageSize;
    return list.slice(start, start + pageSize);
  },

  toVideoItem(item) {
    if (!item || item.type === "text") return item;
    const id = Number(item.tmdbId || item.id);
    if (!Number.isFinite(id) || id <= 0) return null;
    const mediaType = item.mediaType || "tv";
    if (!["movie", "tv"].includes(mediaType)) return null;
    return { id: `${mediaType}.${id}`, type: "tmdb" };
  },

  toVideoItems(list) {
    return (list || []).map(item => this.toVideoItem(item)).filter(Boolean);
  }
};

/**
 * 模块 1：加载豆瓣榜单
 */
async function loadDouban(params = {}) {
  const data = await Utils.fetch("douban-hot.json");
  if (data === Utils.emptyTips) return data;

  let list = data?.[params.channel] || [];
  list = Utils.sortList(list, params.sort_type); // 直接同步调用，不再 await
  return Utils.toVideoItems(Utils.paginate(list, params.page));
}

/**
 * 模块 1B：豆瓣热榜-热评
 * 榜单与「豆瓣热榜」完全一致；仅把 description 换成该条目的豆瓣热评。
 * 没有热评的条目保留原始简介，不影响任何历史榜单。
 */
async function loadDoubanComments(params = {}) {
  const data = await Utils.fetch("douban-hot.json");
  if (data === Utils.emptyTips) return data;

  let list = data?.[params.channel] || [];
  list = Utils.sortList(list, params.sort_type);
  const comments = data?.comments || {};
  // tmdb 类型会被宿主用官方简介覆盖 description；这里改用 url 类型自带字段，
  // 热评才能原样进入卡片，同时保留原始 tmdb ID 供详情页还原。
  return (Utils.paginate(list, params.page) || []).map(raw => {
    if (!raw || raw.type === "text") return raw;
    const mediaType = raw.mediaType || "tv";
    const tmdbId = Number(raw.tmdbId || raw.id);
    if (!Number.isFinite(tmdbId) || tmdbId <= 0) return null;
    if (!["movie", "tv"].includes(mediaType)) return null;
    const key = `${mediaType}.${tmdbId}`;
    const comment = comments[key];
    // 热评末尾带上豆瓣作者，卡片按“—— 昵称”显示；无作者时只放正文。
    const review = comment && comment.text
      ? comment.text + (comment.author ? ` —— ${comment.author}` : "")
      : "";
    return {
      id: `tmdb:${mediaType}:${tmdbId}`,
      type: "url",
      link: `tmdb:${mediaType}:${tmdbId}`,
      title: raw.title,
      description: review || raw.description || "", posterUrl: raw.posterPath, backdropUrl: raw.backdropPath,
      rating: raw.rating,
      mediaType,
      genreTitle: raw.genreTitle,
      releaseDate: raw.releaseDate
    };
  }).filter(Boolean);
}

/**
 * 热评条目的详情：还原成 tmdb 条目，交回 Rex 原生详情页。
 */
async function loadDetail(link) {
  const match = /^tmdb:(movie|tv):(\d+)$/.exec(String(link || ""));
  if (!match) return null;
  const mediaType = match[1], tmdbId = match[2];
  const key = `${mediaType}.${tmdbId}`;
  const data = await Utils.fetch("douban-hot.json");
  if (data === Utils.emptyTips) return null;
  for (const channel of Object.keys(data)) {
    const list = data[channel];
    if (!Array.isArray(list)) continue;
    const raw = list.find(entry => `${entry.mediaType || "tv"}.${Number(entry.tmdbId || entry.id)}` === key);
    if (!raw) continue;
    return {
      id: tmdbId,
      type: "tmdb",
      title: raw.title,
      description: raw.description, posterUrl: raw.posterPath, backdropUrl: raw.backdropPath,
      rating: raw.rating,
      mediaType,
      genreTitle: raw.genreTitle,
      releaseDate: raw.releaseDate
    };
  }
  return { id: tmdbId, type: "tmdb", mediaType };
}

/**
 * 模块 2：加载精选剧场
 */
async function loadTheater(params = {}) {
  const data = await Utils.fetch("theater-data.json");
  if (data === Utils.emptyTips) return data;

  const brand = params.brand || "迷雾剧场";
  const status = params.status || "all";

  const brandData = data[brand];
  if (!brandData) return [];

  let list = [];
  if (status === "aired") {
    list = brandData.aired || [];
  } else if (status === "upcoming") {
    list = brandData.upcoming || [];
  } else {
    list = [...(brandData.upcoming || []), ...(brandData.aired || [])];
  }

  list = Utils.sortList(list, params.sort_type); // 同步调用
  return Utils.toVideoItems(Utils.paginate(list, params.page));
}

/**
 * 模块 3：加载热门番剧 (Bangumi)
 */
async function loadBangumi(params = {}) {
  const data = await Utils.fetch("bangumi-hot.json");
  if (data === Utils.emptyTips) return data;

  let list = data?.hot_anime || data?.items || [];

  if (params.genre && params.genre !== "") {
    const genreNames = { "28": "动作", "12": "冒险", "16": "动画", "35": "喜剧", "14": "奇幻", "18": "剧情", "878": "科幻", "9648": "悬疑" };
    const genreName = genreNames[params.genre];
    list = list.filter(item => genreName && String(item.genreTitle || "").includes(genreName));
  }

  list = Utils.sortList(list, params.sort_type); // 同步调用
  return Utils.toVideoItems(Utils.paginate(list, params.page));
}

/**
 * 模块 4：加载芒果TV热榜
 */
async function loadMangoTV(params = {}) {
  const data = await Utils.fetch("mgtv-hot.json");
  if (data === Utils.emptyTips) return data;

  const sort_by = params.sort_by || "tv";
  let list = data?.[sort_by] || [];

  list = Utils.sortList(list, params.sort_type); // 同步调用
  return Utils.toVideoItems(Utils.paginate(list, params.page));
}

/**
 * 模块 5：加载骨朵热榜
 */
async function loadGuduo(params = {}) {
  const data = await Utils.fetch("guduo-hot.json");
  if (data === Utils.emptyTips) return data;
  const list = data?.categories?.[params.category || "剧集"] || [];
  return Utils.toVideoItems(Utils.paginate(list, params.page));
}

/**
 * 模块 7：加载动画疯人气榜
 */
async function loadAniGamer(params = {}) {
  try {
    const data = await Utils.fetch("anigamer-hot.json");
    if (data === Utils.emptyTips || !data?.lists) throw new Error("动画疯榜单 JSON 格式不正确");
    const sort = params.sort === "yearly" ? "yearly" : "monthly";
    const filter = ["tags", "categories", "targets"].includes(params.filter) ? params.filter : "all";
    const values = { tags: ["动作", "冒险", "奇幻", "异世界", "科幻", "校园", "喜剧", "恋爱", "悬疑", "运动", "特摄", "BL", "GL"], categories: ["电影", "OVA", "双语", "泡面番", "真人演出"], targets: ["阖家观赏", "付费会员", "年龄限制"] };
    const selectedValue = filter === "tags" ? params.tag : filter === "categories" ? params.category : params.target;
    const pageLimit = sort === "monthly" && filter !== "all" ? 3 : 5;
    const page = String(Math.min(pageLimit, Math.max(1, Number(params.page) || 1)));
    const list = sort === "monthly" && filter !== "all" && values[filter].includes(selectedValue)
      ? data.filters?.monthly?.[filter]?.[selectedValue]?.[page] || []
      : data.lists[sort]?.[page] || [];
    return Utils.toVideoItems(list);
  } catch (error) {
    let reason = error.message || String(error);
    const status = await Utils.fetch("anigamer-status.json");
    if (status !== Utils.emptyTips && status?.ok === false && status.reason) reason = status.reason;
    console.error("[loadAniGamer] 失败:", reason);
    throw new Error(`动画疯榜单更新失败：${reason}`);
  }
}

/**
 * 模块 6：加载 FlixPatrol 全球流媒体榜
 */
async function loadFlixPatrol(params = {}) {
  const allowedCountries = ["world", "united-states", "taiwan", "hong-kong", "singapore", "south-korea", "japan"];
  const country = allowedCountries.includes(params.country) ? params.country : "united-states";
  const data = await Utils.fetch(`flixpatrol/${country}.json`);
  if (data === Utils.emptyTips || !data?.platforms) return data === Utils.emptyTips ? data : [];

  const chart = ["all", "movies", "tv", "overall", "kids_movies", "kids_tv"].includes(params.chart) ? params.chart : "all";
  const collect = platform => {
    const charts = platform?.charts || {};
    return chart === "all" ? [...(charts.movies || []), ...(charts.tv || [])] : (charts[chart] || []);
  };
  let list = [];
  if (params.platform === "all") {
    for (const platform of Object.values(data.platforms)) list.push(...collect(platform));
  } else {
    const platform = data.platforms[params.platform || "netflix"];
    if (!platform) return [];
    list = collect(platform);
  }

  const unique = [];
  const seen = new Set();
  for (const item of list) {
    const key = `${item.mediaType || "tv"}:${item.tmdbId || item.id || item.title}`;
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(item);
  }
  return Utils.toVideoItems(Utils.paginate(unique, params.page, 24));
}

/**
 * 模块 8：FlixPatrol 排名版，把真实名次写进条目文字字段，供排名卡片读取。
 * 原「流媒体 TOP 10」入口保持不变。
 */
async function loadFlixPatrolRanked(params = {}) {
  try {
    const allowedCountries = ["world", "united-states", "taiwan", "hong-kong", "singapore", "south-korea", "japan"];
    const country = allowedCountries.includes(params.country) ? params.country : "united-states";
    const data = await Utils.fetch(`flixpatrol/${country}.json`);
    if (data === Utils.emptyTips) return data;
    if (!data?.platforms) throw new Error("FlixPatrol JSON 格式不正确");

    const allowedCharts = ["tv", "movies", "kids_tv", "kids_movies"];
    const chart = allowedCharts.includes(params.chart) ? params.chart : "tv";
    const platform = data.platforms[params.platform || "netflix"];
    if (!platform) return [];
    const list = (platform.charts?.[chart] || []).filter(item => Number(item.rank) > 0);
    if (!list.length) return [];

    const items = [];
    for (const raw of list.slice(0, 10)) {
      const tmdbId = Number(raw.tmdbId || raw.id);
      const mediaType = raw.mediaType === "movie" ? "movie" : "tv";
      if (!Number.isFinite(tmdbId) || tmdbId <= 0) continue;
      const link = `tmdb:${mediaType}:${tmdbId}`;
      items.push({
        id: link,
        link,
        type: "url",
        mediaType,
        title: raw.tmdbTitle || raw.title || "", posterUrl: raw.posterPath || "", backdropUrl: raw.backdropPath || "",
        releaseDate: raw.releaseDate || "",
        rating: raw.rating,
        description: String(raw.rank)
      });
    }
    return items;
  } catch (error) {
    console.error("[loadFlixPatrolRanked] 失败:", error.message || error);
    throw error;
  }
}

/**
 * 模块 9：爱优腾芒哔看点。爱优腾哔由 List 预抓并匹配，哔哩哔哩仅动漫国创，芒果现场抓取。
 * 原始条目先去重、合并标签，再筛选排序和分页，最后投影成卡片。
 */
function teaserTags(entry) {
  const tags = entry.tags || [];
  return Array.isArray(tags) ? tags : [];
}

const TEASER_LOW_AGE_TITLE = /(?:宝宝巴士|贝乐虎|儿歌|睡前故事|学龄前|亲子|早教|低幼|幼儿|启蒙|识字|红小豆|开心锤锤|叶罗丽|熊出没|喜羊羊|京剧猫|熊猫和小鼹鼠|不白吃|哆啦A梦|蜡笔小新|海绵宝宝|小猪佩奇|汪汪队|超级飞侠|巴啦啦小魔仙|大神探诸葛九九|诸葛九九|U探泰拉)/;
const TEASER_LIVE_ACTION_TITLE = /(?:大周第一婿|真假千金)/;
// 旧缓存没有 originCountry 时，先用已知非国产作品兜底；新抓取数据会走 TMDB 原产地字段。
const TEASER_NON_CN_TITLE = /(?:灌篮高手|鬼灭之刃|名侦探柯南|龙珠|奥特曼|神奇数字马戏团|海贼王|火影忍者|咒术回战|进击的巨人|间谍过家家|排球少年|黑子的篮球|数码宝贝|宝可梦|宠物小精灵)/;

function teaserIsLowAge(entry) {
  if (!entry) return false;
  const title = String(entry.displayTitle || entry.title || "");
  if (TEASER_LOW_AGE_TITLE.test(title)) return true;
  return teaserTags(entry).some(tag => /儿童|Kids|少儿/i.test(String(tag)));
}

function teaserTmdbIsAnime(entry) {
  const ids = entry && (entry.genreIds || entry.genre_ids) || [];
  return Array.isArray(ids) && ids.some(id => Number(id) === 16);
}

function teaserIsForeign(entry) {
  const regions = (entry && (entry.originCountry || entry.origin_country) || [])
    .map(code => String(code || "").trim()).filter(Boolean);
  if (regions.length && !regions.some(code => ["CN", "HK", "MO", "TW"].includes(code))) return true;
  return TEASER_NON_CN_TITLE.test(String(entry && (entry.displayTitle || entry.title) || ""));
}

function teaserMatches(entry, filter) {
  if (!filter || filter === "all") return true;
  const tags = teaserTags(entry);
  if (tags.includes(filter)) return true;
  return filter === entry.genre;
}

function teaserSort(list, sort) {
  const copy = list.slice();
  if (sort === "updated") {
    // 与豆瓣热榜「最近更新」同款：用 TMDB 的 lastUpdateDate（剧集为 last_air_date）。
    return copy.sort((a, b) => String(b.lastUpdateDate || b.releaseDate || "").localeCompare(String(a.lastUpdateDate || a.releaseDate || "")));
  }
  if (sort === "new") {
    return copy.sort((a, b) => String(b.releaseDate || "").localeCompare(String(a.releaseDate || "")));
  }
  if (sort === "rating") {
    return copy.sort((a, b) => (Number(b.rating) || 0) - (Number(a.rating) || 0));
  }
  if (sort === "heat") {
    return copy.sort((a, b) => (Number(b.popularity) || 0) - (Number(a.popularity) || 0));
  }
  return copy;
}

async function loadQqTeaser(params = {}) {
  // 已导入的旧首页包仍绑定这个名称，使用同一个聚合入口。
  return loadQqTeaserMerged(params);
}

function teaserPriority(entry) {
  return (String(entry.teaser || "").trim() ? 5 : 0) + ({ qq: 4, iq: 3, bili: 2, yk: 1 }[entry.source] || 0);
}

function teaserDedupe(entries) {
  const seen = new Map();
  for (const entry of entries) {
    const id = Number(entry.tmdbId);
    if (!Number.isFinite(id) || id <= 0 || !(entry.posterPath || entry.backdropPath)) continue;
    const key = (entry.mediaType === "movie" ? "movie" : "tv") + "." + id;
    const current = seen.get(key);
    if (!current) { seen.set(key, entry); continue; }
    const primary = teaserPriority(entry) > teaserPriority(current) ? entry : current;
    const extra = primary === entry ? current : entry;
    const merged = Object.assign({}, primary);
    for (const field of Object.keys(extra)) {
      if (merged[field] == null || merged[field] === "" || (Array.isArray(merged[field]) && !merged[field].length)) merged[field] = extra[field];
    }
    merged.tags = Array.from(new Set(teaserTags(primary).concat(teaserTags(extra))));
    merged.alsoOn = Array.from(new Set((primary.alsoOn || []).concat(extra.alsoOn || [], [primary.source, extra.source]).filter(Boolean))).sort();
    merged.lastUpdateDate = [primary.lastUpdateDate || "", extra.lastUpdateDate || ""].sort().pop();
    seen.set(key, merged);
  }
  return Array.from(seen.values());
}

/* ---------------------------------------------------------------- 芒果TV 现场抓取
   芒果片库列表按地区返回不同内容，GitHub Actions 的海外 IP 看不到国内新剧，
   所以芒果不走 List 仓库，改在用户设备上现场抓（用户网络在国内，列表完整）。 */

var MG_API = "https://pianku.api.mgtv.com/rider/list/pcweb/v3";
var MG_CHANNELS = { tv: 2, movie: 3, variety: 1, anime: 50 };

function mgTitleClean(value) {
  return String(value || "")
    .replace(/普通话版?|国语版?|粤语版?|日语版?|中配版?|原声版?|未删减版?|修复版?|重映版?|英语版?|台配版?|港配版?/g, "")
    .replace(/第\s*[0-9一二三四五六七八九十百]+\s*[季期部篇]/g, "")
    .replace(/年番|完结季|完结篇|特别篇|加更篇|衍生篇|番外篇|总篇|精华篇|爽看版|精编版|加更版|会员版|悠享版|抢先版|完整版|导演剪辑版|速看版|高能版|纯享版|竖屏版|横屏版|特辑|大结局|升级版|重逢版/g, "")
    .replace(/[（(][^)）]*[)）]|\[[^\]]*\]|【[^】]*】/g, "")
    .replace(/[\s·・]*(?:更新|更新中)$/, "").replace(/[\s·・]+$/, "").trim();
}

async function mgFetchList(channelKey) {
  const channelId = MG_CHANNELS[channelKey];
  if (!channelId) return [];
  const res = await Widget.http.get(MG_API + "?allowedRC=1&platform=pcweb&channelId=" + channelId +
    "&pn=1&pc=30&hudong=1&_support=10000000&sort=c1", {
    headers: { "Referer": "https://www.mgtv.com/lib/" + channelId, "accept": "application/json" }
  });
  const body = res && res.data !== undefined ? res.data : res;
  if (typeof body === "string") { try { return JSON.parse(body).data.hitDocs || []; } catch (e) { return []; } }
  return (body && body.data && body.data.hitDocs) || [];
}

function mgPickTeaser(doc, channelKey) {
  const subtitle = String(doc.subtitle || "").trim();
  // 综艺/动漫的 subtitle 是原生短看点；电视剧/电影是演员名单，改截 story。
  if ((channelKey === "variety" || channelKey === "anime") && subtitle &&
      subtitle.indexOf(",") < 0 && subtitle.indexOf("，") < 0 && subtitle.length <= 20) {
    return subtitle;
  }
  const story = String(doc.story || "").trim();
  if (!story) return "";
  const clauses = story.split(/[，；。！？]/).map(s => s.trim()).filter(s => s.length >= 4);
  const full = clauses.filter(s => s.length <= 16);
  if (full.length) {
    let best = full.reduce((a, b) => b.length > a.length ? b : a);
    if (best.length < 10) {
      for (const part of clauses.slice(1)) {
        const joined = clauses[0] + "，" + part;
        if (joined.length <= 16) { best = joined; break; }
      }
    }
    return best + "。";
  }
  if (clauses.length) return clauses.reduce((a, b) => b.length < a.length ? b : a).slice(0, 15) + "…";
  return story.slice(0, 15) + "…";
}

async function mgMatch(entry, kind, requireChina = false) {
  const names = [mgTitleClean(entry.title)];
  for (const name of names) {
    try {
      const res = await Widget.tmdb.get("search/" + kind, { params: { query: name, language: "zh-CN", include_adult: "false" } });
      const year = String(entry.year || "");
      let best = null, bestScore = 0;
      for (const result of (res && res.results) || []) {
        if (!result || !result.id) continue;
        // 榜单只统计国产剧；黑沙这类重名会撞上海外剧（冰岛 Black Sands）。
        const regions = result.origin_country || [];
        if (requireChina && regions.length && !regions.some(r => ["CN", "HK", "MO", "TW"].includes(r))) continue;
        const titles = [result.name, result.title, result.original_name, result.original_title].filter(Boolean);
        let score = 0;
        for (const t of titles) {
          const a = name.replace(/[^\w\u4e00-\u9fa5]+/g, ""), b = t.replace(/[^\w\u4e00-\u9fa5]+/g, "");
          if (!a || !b) continue;
          const grams = s => { const o = new Set(); for (let i = 0; i < s.length - 1; i++) o.add(s.slice(i, i + 2)); if (s.length === 1) o.add(s); return o; };
          const ga = grams(a), gb = grams(b);
          let shared = 0; for (const g of ga) if (gb.has(g)) shared++;
          if (ga.size && gb.size) score = Math.max(score, shared / (ga.size + gb.size - shared));
        }
        const date = String(result.first_air_date || result.release_date || "");
        if (year && date.slice(0, 4) === year) score += 0.5;
        score += Math.min(0.2, (result.popularity || 0) / 5000);
        if (score > bestScore) { bestScore = score; best = result; }
      }
      if (!best || bestScore < 0.72) continue;
      let origin = Array.isArray(best.origin_country) ? best.origin_country : [];
      if (requireChina && !origin.length) {
        try {
          const detail = await Widget.tmdb.get(kind + "/" + best.id, { params: { language: "zh-CN" } });
          origin = Array.isArray(detail.origin_country) ? detail.origin_country : [];
        } catch (detailError) {
          console.warn("[mgLive] TMDB detail failed:", detailError.message || detailError);
        }
      }
      if (requireChina && origin.length && !origin.some(r => ["CN", "HK", "MO", "TW"].includes(r))) continue;
      const poster = best.poster_path || "", backdrop = best.backdrop_path || "";
      if (!poster && !backdrop) continue;
      return {
        tmdbId: best.id, mediaType: kind, posterUrl: poster, backdropUrl: backdrop,
        genreIds: Array.isArray(best.genre_ids) ? best.genre_ids : [],
        originCountry: origin,
        releaseDate: String(best.first_air_date || best.release_date || ""),
        lastUpdateDate: entry.lastUpdateDate || String(best.first_air_date || best.release_date || ""),
        rating: best.vote_average || 0,
        popularity: best.popularity || 0,
      };
    } catch (error) {
      console.warn("[mgLive] TMDB search failed:", error.message || error);
    }
  }
  return null;
}

async function mgLiveEntries(channelKey) {
  const docs = await mgFetchList(channelKey);
  const kind = channelKey === "movie" ? "movie" : "tv";
  const entries = [];
  for (const doc of docs) {
    const title = mgTitleClean(doc.title);
    const cid = "mg" + String(doc.clipId || "");
    if (!title || entries.some(e => e.cid === cid)) continue;
    if (channelKey === "anime" && teaserIsLowAge({ title })) continue;
    entries.push({
      source: "mgtv", cid,
      title,
      teaser: mgPickTeaser(doc, channelKey),
      year: String(doc.year || ""),
      episodeText: String(doc.updateInfo || ""),
      lastUpdateDate: String(doc.se_updateTime || "").slice(0, 10),
      tags: String(doc.kind || "").split(/[,，、/|]/).map(s => s.trim()).filter(Boolean),
    });
  }
  const out = [];
  for (const entry of entries) {
    const hit = await mgMatch(entry, kind, channelKey === "anime");
    if (!hit) continue;
    if (channelKey === "anime") {
      const ids = (hit.genreIds || []).map(Number);
      if (!teaserTmdbIsAnime(hit) || ids.includes(10762) || teaserIsLowAge(Object.assign({}, entry, hit))) continue;
    }
    out.push(Object.assign({}, entry, hit));
  }
  return out;
}

async function loadQqTeaserMerged(params = {}) {
  try {
    const data = await Utils.fetch("qq-teaser.json");
    const allowed = ["tv", "movie", "variety", "anime"];
    const channel = allowed.includes(params.channel) ? params.channel : "tv";
    const base = data === Utils.emptyTips ? [] : (data.channels || {})[channel] || [];
    let mg = [];
    try {
      mg = await mgLiveEntries(channel);
    } catch (error) {
      console.error("[mgLive] 失败:", error.message || error);
    }
    if (data === Utils.emptyTips && !mg.length) return data;
    let merged = teaserDedupe(base.concat(mg));
    if (channel === "anime") merged = merged.filter(entry => !teaserIsLowAge(entry)
      && !teaserIsForeign(entry)
      && !TEASER_LIVE_ACTION_TITLE.test(String(entry.displayTitle || entry.title || "")));
    const filter = params.tag && params.tag !== "all" ? String(params.tag) : "";
    const sort = ["heat", "updated", "new", "rating"].includes(params.sort) ? params.sort : "heat";
    const sorted = teaserSort(merged.filter(entry => teaserMatches(entry, filter)), sort);
    return Utils.paginate(sorted, Math.max(1, parseInt(params.page, 10) || 1), 12).map(entry => {
      const mediaType = entry.mediaType === "movie" ? "movie" : "tv";
      const tmdbId = Number(entry.tmdbId);
      const link = `tmdb:${mediaType}:${tmdbId}`;
      return {
        id: link, link, type: "url", mediaType, tmdbId,
        title: mgTitleClean(entry.displayTitle || entry.title),
        description: entry.teaser || "", posterUrl: entry.posterPath || "", backdropUrl: entry.backdropPath || entry.posterPath || "",
        releaseDate: entry.releaseDate || "",
        rating: Number(entry.rating) > 0 ? Number(entry.rating) : undefined,
        genreTitle: teaserTags(entry).join(" / ")
      };
    });
  } catch (error) {
    console.error("[loadQqTeaserMerged] 失败:", error.message || error);
    throw error;
  }
}
