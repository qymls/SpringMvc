import leftNavChildren from './menu.js'
import leftNavChildrenShrinkMenu from './shrinkmenu.js'

var vue = new Vue({
    el: '#app',
    name: 'leftnav',
    components: {
        leftNavChildren,
        leftNavChildrenShrinkMenu,
    },
    data: function () {
        return {
            menuData: [
                {name: '首页', label: '首页', Icon: "md-home", url: 'person.html', englishName: "home"},
                {
                    label: '信息管理', name: "信息管理", Icon: "ios-book-outline", url: 'menu_data.html',
                    children: [
                        {
                            name: '菜谱管理', label: '菜谱管理', Icon: "ios-book-outline", url: 'CookBook/list.html',
                            children: [
                                {name: '食材管理', label: '食材管理', Icon: "ios-book-outline", url: 'User/list.html'},
                                {
                                    name: '菜系管理', label: '菜系管理', Icon: "ios-book-outline", url: 'index.html',
                                    children: [{
                                        name: '川菜管理',
                                        label: '川菜管理',
                                        Icon: "ios-book-outline",
                                        url: 'Customter/list.html'
                                    },
                                        {
                                            name: '越菜管理',
                                            label: '越菜管理',
                                            Icon: "ios-people-outline",
                                            url: 'Customter/list.html',
                                            children: [
                                                {
                                                    name: '红烧肉管理',
                                                    label: '红烧肉管理',
                                                    Icon: "ios-book-outline",
                                                    url: 'index.html',
                                                    children: [
                                                        {
                                                            name: '清蒸管理',
                                                            label: '清蒸管理',
                                                            Icon: "ios-people-outline",
                                                            url: 'Customter/list.html',
                                                            children: [
                                                                {
                                                                    name: '递归管理',
                                                                    label: '递归管理',
                                                                    Icon: "ios-book-outline",
                                                                    url: 'index.html'
                                                                }
                                                            ],
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        {name: '顾客管理', label: '顾客管理', Icon: "ios-people-outline", url: 'Customter/list.html'},

                    ]
                },
                {label: '国际管理', name: "国际管理", Icon: "ios-card-outline", url: 'index.html'},
                {label: '全屏管理', name: "全屏管理", Icon: "ios-archive", url: 'menu_data.html'},
                {
                    label: '系统管理', name: "系统管理", Icon: "md-alarm", url: 'index.html',
                    children: [
                        {name: '用户管理', label: '用户管理', Icon: "ios-book-outline", url: 'User/list.html'},
                        {name: '角色管理', label: '角色管理', Icon: "ios-book-outline", url: 'index.html'},

                    ]
                },

                {
                    label: '用户设置', name: "用户设置", Icon: "md-apps", url: 'index.html',
                    children: [
                        {
                            name: '基础设置', label: '基础设置', Icon: "ios-book-outline", url: 'User/list.html',
                            children: [
                                {name: '天空设置', label: '天空设置', Icon: "ios-book-outline", url: '的'},
                                {
                                    name: '大会设置', label: '大会设置', Icon: "ios-book-outline", url: '的',
                                    children: [
                                        {name: '大树设置', label: '大树设置', Icon: "ios-book-outline", url: '的'},
                                        {
                                            name: '衣服设置', label: '衣服设置', Icon: "ios-book-outline", url: '的',
                                            children: [
                                                {name: '电影设置', label: '电影设置', Icon: "ios-book-outline", url: '的'}
                                            ]

                                        },

                                    ]
                                },
                                {name: '海洋设置', label: '海洋设置', Icon: "ios-book-outline", url: '的'}
                            ]
                        },
                        {name: '密码设置', label: '密码设置', Icon: "ios-book-outline", url: 'index.html'},
                        {
                            name: '特殊设置', label: '特殊设置', Icon: "ios-book-outline", url: '', children: [
                                {name: '卫星设置', label: '卫星设置', Icon: "ios-book-outline", url: 'index.html'},
                                {
                                    name: '天气设置', label: '天气设置', Icon: "ios-book-outline", url: '', children: [
                                        {name: '数目设置', label: '数目设置', Icon: "ios-book-outline", url: 'index.html'},
                                        {name: '无敌设置', label: '无敌设置', Icon: "ios-book-outline", url: 'index.html'},
                                    ]
                                },
                                {name: '河流设置', label: '河流设置', Icon: "ios-book-outline", url: 'index.html'},
                            ]
                        },
                    ]
                },
            ],
            activeTab: null,
            mainHeight: 0,
            frameHeight: 50,
            openMenuName: [],
            activeName: null,
            mainTabs: [],
            breadRum: [],/*初始化首页的面包屑每次提交需要把之前的清空，在点击菜单时在初始化*/
            temp: [],//用于递归临时储存值
            fullscreen: false,//是否全屏显示
            isCollapsed: false,//侧边栏菜单是否收起
            selfMessageCN: {},//语言切换后显示的，可以放在文件里import进来，或者数据库读取，或者处理菜单数据
            selfMessageEN: {},

            tempArray: [],//临时数组使用，用于存储菜单语言信息
        };
    },
    computed: {//用于左边菜单栏的收起
        rotateIcon() {//点击改变收缩按钮的样式
            return [
                'menu-icon',
                this.isCollapsed ? 'rotate-icon' : ''
            ];
        },
        menuitemClasses() {//点击收缩后menu的样式
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        }
    },
    mounted: function () {
        this.getlangData(this.menuData)//调用，把菜单数据处理了，放在tempArray里的
        this.selfMessageCN = this.jointStr(this.tempArray, "zh_CN");
        this.selfMessageEN = this.jointStr(this.tempArray, "en_US");//先将语言加载基础数据加载进来
        this.internationalization("zh_CN")//默认中文显示
        this.setFrameHeight();
        var indexMenu = $.extend({}, this.menuData[0], {show: true, color: "blue"});
        this.mainTabs.push(indexMenu);
        this.breadRum.push(this.menuData[0]);
        this.activeTab = indexMenu.name;
        this.$nextTick(() => {//先刷新菜单选项卡
            this.activeName = this.menuData[0].name;//首页一进来就刷新
            this.$refs.refresh.updateOpened();
            this.$refs.refresh.updateActiveName();
        });

    },
    created() {//create方法比mounted方法先执行，但是都要执行
        /*ajax调用，获取菜单信息*/
        var $page = this;
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "LoginServlet",
            dataType: 'json',
            success: function (result) {
                $page.$Message.success(result);
            }
        });
    },
    methods: {
        getlangData(data) {//递归菜单的json的数据，为拼接字符串做准备
            for (let i = 0; i < data.length; i++) {
                if (data[i].children != undefined && data[i].children.length > 0) {
                    this.tempArray.push(data[i]);
                    this.getlangData(data[i].children)
                } else {
                    this.tempArray.push(data[i]);
                }
            }
        },

        jointStr(data, param) {//拼接显示的字符集,参数，en_US,zh_CN
            var str = "{";
            if (param == "en_US") {
                for (let i = 0; i < data.length; i++) {
                    if (i != data.length - 1) {
                        str += "\"" + data[i].name + "\"" + ":" + "\"" + data[i].englishName + "\"" + ",";
                    } else {
                        str += "\"" + data[i].name + "\"" + ":" + "\"" + data[i].englishName + "\"";
                    }
                }
            } else if (param == "zh_CN") {
                for (let i = 0; i < data.length; i++) {
                    if (i != data.length - 1) {
                        str += "\"" + data[i].name + "\"" + ":" + "\"" + data[i].name + "\"" + ",";
                    } else {
                        str += "\"" + data[i].name + "\"" + ":" + "\"" + data[i].name + "\"";
                    }
                }
            } else {
                alert("jointStr参数无效")
            }
            str += "}";
            return JSON.parse(str);
        },

        changeLang(lang) {
            this.internationalization(lang)//切换语言
        },

        internationalization: function (lang) {//国际化切换，需要引入i18n.js
            localStorage.setItem('CRMLang', lang);
            const messages = {
                zh_CN: this.selfMessageCN,//这里的数据需要import文件，或者数据库读取，或者自己写
                en_US: this.selfMessageEN,
            }
            Object.keys(messages).forEach(function (lang) {
                Vue.locale(lang, messages[lang])
            })
            Vue.config.lang = localStorage.getItem("CRMLang") || "zh_CN";//传递的语音，不然就是中文格式下的
        },
        collapsedSider() {//点击菜单收起的方法
            this.$refs.side1.toggleCollapse();
        },

        //根据名称来查找对应的菜单条目
        getMenuItem: function (name) {
            var copyArr = $.extend(true, [], this.menuData);//数组的深度复制,不影响原数组
            return this.recursionResult(copyArr, name);

        },

        //递归调用,原理递归第一个菜单，到最后一级菜单还是没有找到（没有childre的视为最后一级），删除这个形成新数组
        //再把新的数组传入继续递归，直到找到为止
        recursionResult: function (data, name) {
            var searchResult = this.getMenuItemforEach(data[0], name);
            if (searchResult == null) {//如果没有找到，将删除子菜单的新数组放进去
                this.temp = data;//用于处理无法删除第一级菜单的情况
                this.breadRum = [];//没有找到就清除面包屑，只有在找到的情况下才能添加面包屑
                this.breadRum.push(this.menuData[0])
                this.openMenuName = [];
                return this.recursionResult(data, name)//递归是不能传值第0个因为上面的参数是整个数组
            } else {
                //alert(searchResult);
                return searchResult;
            }
        },

        //递归单级菜单
        getMenuItemforEach: function (data, name) {
            if (data.name == name) {//有chthis.menuDataildren才循环
                this.breadRum.push(data);//添加面包屑
                return data;
            } else {
                if (data.children != undefined && data.children.length > 0) {//有children的才能够循环，没有就不循环。递归
                    this.breadRum.push(data)//添加面包屑
                    this.openMenuName.push(data.name);//用于存储要打开的submenu的name
                    this.temp = data.children;
                    return this.getMenuItemforEach(data.children[0], name)//传入0的原因是，确定是最后一级菜单时，还不是要找的，就把他移除了
                } else {
                    this.delValInArr(data, this.temp)
                    return null;
                }
            }
        },
        delValInArr: function (value, array) {//用于删除数组中的元素，这里用于删除菜单
            var pos = $.inArray(value, array);
            array.splice(pos, 1);
        },

        //根据名称查找对应的Tab页。
        getTab: function (name) {
            for (var i = 0; i < this.mainTabs.length; i++) {
                if (this.mainTabs[i].name == name) return this.mainTabs[i];
            }
            return null;//没有找到
        },
        //设置Tab页不可见。
        removeTab: function (name) {
            const tab = this.getTab(name);
            if (tab != null) tab.show = false;//当前激活选项卡要使用双向数据绑定
            this.breadRum = [];/*需要使用默认值,修改面包屑的位置*/
            this.openMenuName = [];
            this.activeName = null;//每次点击都清空
            this.getMenuItem(this.activeTab);//调用就处理了面包屑和值
            this.activeName = this.activeTab;//解决菜单收缩后关闭其他吧自己都关闭的问题
            if (!this.isCollapsed) {//当菜单没有被收缩是才刷新
                this.$nextTick(() => {//先刷新菜单选项卡
                    this.activeName = this.activeTab;//打开指定的菜单,解决关闭在打开不刷新的情况
                    this.$refs.refresh.updateOpened();
                    this.$refs.refresh.updateActiveName();
                });
            }
        },
        //在关闭前判断是否是首页，首页不关闭
        beforeRemove(index) {
            var page = this;
            if (index == 0) {//0就是首页，无法关闭
                return new Promise(function (resolve, reject) {
                    page.$Message.error('首页无法关闭');
                });
            }

        },
        setFrameHeight: function () {
            //调整掉一些补白的值
            this.mainHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - 90 - 90;
            this.frameHeight = this.mainHeight - 90;
        },
        //tag点击
        tabclick: function (name) {//用于点击tag时去匹配菜单的对应的name
            this.breadRum = [];/*需要使用默认值,修改面包屑的位置*/
            this.openMenuName = [];
            this.activeName = null;//每次点击都清空
            this.activeTab = name;//点击哪个标签，设置成活跃，使用v-model双向绑定
            this.getMenuItem(name);//调用时面包屑和要要打开的菜单就已经设置好了
            this.activeName = name;//解决菜单收缩后关闭其他吧自己都关闭的问题
            if (!this.isCollapsed) {//当菜单没有被收缩是才刷新
                this.$nextTick(() => {
                    /*console.log(this.openMenuName)*/
                    this.activeName = name;//打开指定的菜单，解决关闭在打开不刷新的情况
                    this.$refs.refresh.updateOpened();
                    this.$refs.refresh.updateActiveName();
                });
            }
        },
        //菜单点击
        menuSelect: function (name) {
            this.breadRum = [];/*需要使用默认值*/
            this.$Message.info(name);
            var tab = this.getTab(name);
            if (tab == null) {
                var mi = this.getMenuItem(name);
                var mi = $.extend({}, mi, {show: true, color: "blue"});
                this.mainTabs.push(mi);

            } else {
                tab.show = true;
                this.getMenuItem(name);
            }
            this.activeTab = name;
            this.activeName = name;
            if (!this.isCollapsed) {//当菜单没有被收缩是才刷新
                this.$nextTick(() => {//刷新Submenu，微小bug
                    this.$refs.refresh.updateOpened();
                    this.$refs.refresh.updateActiveName();
                });
            }
        },
        //批量关闭标签页
        closeTabs: function (name) {
            if (name == 'close-other') {
                this.close_tabs_name(this.activeName);

            } else if (name == 'close-all') {//
                this.activeTab = this.menuData[0].name;
                this.activeName = this.menuData[0].name;
                this.close_tabs_name(this.menuData[0].name)
            } else {
                console.log("无效参数");
            }

        },

        close_tabs_name: function (name) {
            for (let i = 0; i < this.mainTabs.length; i++) {
                if (this.mainTabs[i].name != this.menuData[0].name && this.mainTabs[i].name != name) {
                    this.removeTab(this.mainTabs[i].name)//关闭对应的tab标签
                }
            }
        },
        //菜单收缩后，点击一级菜单，去打开对应的tabs
        tooltip_click: function (name) {
            this.menuSelect(name)//相当于点击了菜单
        },
        drop_click: function (name) {
            if (name != "stop_click") {
                this.menuSelect(name)//相当于点击了菜单
            }
        },
        personClick: function (name) {
            if (name == 'logout') {
                console.log('退出登录')
            } else {
                console.log(name)
                this.menuSelect("首页")//相当于点击了这个页面
            }

        },
        //全屏事件
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        },
        //监听是否按了esc键,判断是否是在全屏状态点击按esc键
        checkFull() {
            var isFull = document.mozFullScreen ||
                document.fullScreen ||
                //谷歌浏览器及Webkit内核浏览器
                document.webkitIsFullScreen ||
                document.webkitRequestFullScreen ||
                document.mozRequestFullScreen ||
                document.msFullscreenEnabled
            if (isFull === undefined) isFull = false;
            //console.log("isFull："+isFull)
            return isFull;
        }


    },


});
//监听屏幕大小变化
window.onresize = function () {
    vue.setFrameHeight();
    var $page = vue;
    if (!$page.checkFull()) {//监听屏幕大小变化
        // 退出全屏后要执行的动作
        $page.fullscreen = false;
    }

}