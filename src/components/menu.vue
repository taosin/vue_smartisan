<template>
<!-- 菜单组件 -->
<div class="c-menus" :class="height>99?'fixed-class':''" v-show="show">
  <ul>
    <li v-for="menu in datas"><a>{{menu.text}}</a></li>
  </ul>
  <div class="s-h-user">
				<ul>
					<li>
						<a title="个人中心" class="s-h-user-a"></a>
					</li>
					<li>
						<a title="购物车" class="s-h-cart-a"></a>
					</li>
				</ul>
	</div>
</div>
</template>

<script>
export default {
  components: {},
  props: ["datas"],
  data() {
    return {
      menus: [],
      height: 0,
      show: true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.sscroll);
  },
  methods: {
    sscroll() {
      const self = this;
      let tsio = document.body.scrollTop || document.documentElement.scrollTop;
      this.height = tsio;
    }
  }
};
</script>
<style scoped lang="less">
.c-menus {
  width: 100%;
  height: 30px;
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
    li {
      float: left;
      padding-left: 2px;
      font-size: 14px;
      // line-height: 28px;
      a {
        display: block;
        padding: 0 20px;
        color: #666;
        cursor: pointer;
        transition: all 0.15s ease-out;
        text-decoration: none;
      }
    }
    li:hover a {
      color: #5079d9;
    }
  }
}
.fixed-class {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 60px;
  // background: #f7f7f7;
  border-bottom: 1px solid #dadada;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  background-image: linear-gradient(#fff, #f1f1f1);
  z-index: 21;
  transition: height ease 0.3s;
  ul {
    width: 1220px;
    margin: 0 auto;
    line-height: 60px;
  }
  .s-h-user {
      margin-top: 20px;
      width: 150px;
      float: left;
      height: 20px;
      margin-left: 80px;
      ul {
        margin-top: 0px;
        li {
          .s-h-user-a {
            content: " ";
            position: absolute;
            width: 0px;
            height: 20px;
            background: url('//static.smartisanos.cn/index/assets/images/account-icon.32d87deb02b3d1c3cc5bcff0c26314ac.png') -117px 108px;
            background-size: 240px 107px;
            -webkit-transition: none;
            transition: none;
            z-index: 99;
            cursor: pointer;
          }
          .s-h-cart-a {
            content: " ";
            width: 0px;
            height: 20px;
            position: absolute;
            background: url('//static.smartisanos.cn/index/assets/images/account-icon.32d87deb02b3d1c3cc5bcff0c26314ac.png') -116px 86px;
            background-size: 240px 107px;
            -webkit-transition: none;
            transition: none;
            z-index: 99;
            cursor: pointer;
            margin-left: 50px;
          }
        }
      }
    }
}
</style>
