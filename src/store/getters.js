const getters={
    homeInfo:state=>state.home.homeInfo,
    userInfo:state=>state.user.userInfo,
    loadMenu:state=>state.user.loadMenu,
    routers:state=>state.permission.routers
}

export default getters

