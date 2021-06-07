<template>
    <div class="app-sidebar sidebar-shadow" @mouseover="toggleSidebarHover('add','closed-sidebar-open')" @mouseleave="toggleSidebarHover('remove','closed-sidebar-open')">
        <div class="app-header__logo">
            <img src="../../assets/demo-ui/images/eye1.png">
            <div class="header__pane ml-auto">
                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" v-bind:class="{ 'is-active' : isOpen }" @click="toggleBodyClass('closed-sidebar')">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-sidebar-content">
            <VuePerfectScrollbar class="app-sidebar-scroll" v-once>
                <sidebar-menu showOneChild :menu="menu"/>
            </VuePerfectScrollbar>
        </div>

    </div>
</template>

<script>
    import {SidebarMenu} from 'vue-sidebar-menu'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        components: {
            SidebarMenu,
            VuePerfectScrollbar
        },
        data() {
            return {
                isOpen: false,
                sidebarActive: false,

                menu: [
                    {
                        header: true,
                        title: 'Collect Data',
                    },
                    // {
                    //     title: 'Common image',
                    //     icon: 'pe-7s-rocket',
                    //     child: [
                    //         {
                    //             href: '/',
                    //             title: 'Analytics',
                    //         },
                    //     ]
                    // },
                    {
                        icon: 'pe-7s-graph2',
                        title: 'Home',
                        href: '/collect/home',
                    },
                    {
                        title: 'Common Camera',
                        icon: 'pe-7s-browser',
                        child: [
                            {
                                href: '/collect/common/list',
                                title: 'List Image',
                            },
                            {
                                href: '/collect/common/add',
                                title: 'Add Data',
                            },
                        ]
                    },
                    {
                        title: 'Image Fundus',
                        icon: 'pe-7s-browser',
                        child: [
                            {
                                href: '/collect/fundus/list',
                                title: 'List Image',
                            },
                            {
                                href: '/collect/fundus/add',
                                title: 'Add Data',
                            },
                        ]
                    },
                    {
                        header: true,
                        title: 'Documentation',
                    },
                    {
                        icon: 'pe-7s-graph2',
                        title: 'Project Explanation',
                        href: '/documentation/project',
                    },
                    {
                        icon: 'pe-7s-graph2',
                        title: 'Labelling Instruction',
                        href: '/documentation/instruction',
                    },
                ],
                collapsed: true,

                windowWidth: 0,

            }
        },
        props: {
            sidebarbg: String,
        },
        methods: {

            toggleBodyClass(className) {
                const el = document.body;
                this.isOpen = !this.isOpen;

                if (this.isOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            toggleSidebarHover(add, className) {
                const el = document.body;
                this.sidebarActive = !this.sidebarActive;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth > '992') {
                    if (add === 'add') {
                        el.classList.add(className);
                    } else {
                        el.classList.remove(className);
                    }
                }
            },
            getWindowWidth() {
                const el = document.body;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth < '1350') {
                    el.classList.add('closed-sidebar', 'closed-sidebar-md');
                } else {
                    el.classList.remove('closed-sidebar', 'closed-sidebar-md');
                }
            },
        },
        mounted() {
            this.$nextTick(function () {
                window.addEventListener('resize', this.getWindowWidth);

                //Init
                this.getWindowWidth()
            })
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
        }
    }
</script>
