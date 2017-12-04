<template>
	<div class="s-shop">
		<!-- 商城菜单 -->
		<div class="s-menus">
			<s-menu :datas="menus"></s-menu>
		</div>
		<!-- 轮播图 -->
		<div class="s-banner">
			<div class="s-banner-items">
				<div class="s-banner-item" @mousemove="mousemove" @mouseout="mousemout" :style="{ transform:'rotateX(' +rotateX +'deg) rotateY('+rotateY+'deg)', boxShadow: shadowX+'px '+shadowY +'px '+ blur+'px #ddd'}">
					<div class="s-img1">
						<img :src="img1">
					</div>
					<div class="s-img2">
						<img :src="img2">
					</div>
					<div class="s-img3">
						<img :src="img3">
					</div>
				</div>
			</div>
		</div>
		<!-- 推荐商品 -->
		<div class="s-1">
			<ul class="s-1-ul">
				<li class="s-1-ul-li">
					<img class="s-1-ul-li-img" src="http://image.smartisanos.cn/resource/9607713b473fc22d6244b5303b8d2149.png?x-oss-process=image/resize,w_610/quality,Q_100/format,webp">
				</li>
				<li class="s-1-ul-li">
					<img class="s-1-ul-li-img" src="http://image.smartisanos.cn/resource/59d358c3a2a6e22e9a2cb135b1da24c0.jpg?x-oss-process=image/resize,w_610/quality,Q_100/format,webp">
				</li>
				<li class="s-1-ul-li">
					<img class="s-1-ul-li-img" src="http://image.smartisanos.cn/resource/01c0bd78504de01bc4d4ada3dc2b95a0.jpg?x-oss-process=image/resize,w_610/quality,Q_100/format,webp">
				</li>
				<li class="s-1-ul-li">
					<img class="s-1-ul-li-img" src="http://image.smartisanos.cn/resource/1334fa8aea2a311289d8154dd7a26efc.jpg?x-oss-process=image/resize,w_610/quality,Q_100/format,webp">
				</li>
			</ul>
		</div>

		<!-- 热门商品 -->
		<div class="s-hot">
			<div class="s-hot-title">热门商品</div>
			<div class="s-hot-main">
				<ul>
					<li v-for="hot in hots">
						<img :src="hot.img">
						<p class="name">{{hot.name}}</p>
						<p class="desc">{{hot.desc}}</p>
						<div class="colors" v-if="hot.colors && hot.colors.length">
							<div class="item" v-for="color in hot.colors">
								<div :style="{background:color}" class="item-color"></div>
							</div>
						</div>
						<div class="price">
							<p>{{hot.price}}</p>
							<div class="btns-class">
								<a class="btn btn-detail">查看详情</a>
								<a class="btn btn-cart">加入购物车</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import sMenu from "./../components/menu.vue";
export default {
  components: {
    sMenu
  },
  data() {
    return {
      img1:
        "http://image.smartisanos.cn/resource/b/8/J1.png?x-oss-process=image/resize,w_1220/quality,Q_100/format,webp",
      img2:
        "http://image.smartisanos.cn/resource/e/3/J2.png?x-oss-process=image/resize,w_1220/quality,Q_100/format,webp",
      img3:
        "http://image.smartisanos.cn/resource/2/8/J3.png?x-oss-process=image/resize,w_1220/quality,Q_100/format,webp",
      menus: [
        { text: "首页", val: "", path: "" },
        { text: "手机", val: "", path: "" },
        { text: "“足迹系列”手感膜", val: "", path: "" },
        { text: "“足迹系列”保护套", val: "", path: "" },
        { text: "官方配件", val: "", path: "" },
        { text: "空气净化类", val: "", path: "" },
        { text: "周边产品", val: "", path: "" },
        { text: "第三方配件", val: "", path: "" },
        { text: "全部商品", val: "", path: "" },
        { text: "服务", val: "", path: "" }
      ],
      rotateX: 0,
      rotateY: 0,
      shadowX: 0,
      shadowY: 0,
      blur: 0,
      hots: [
        {
          img:
            "https://resource.smartisan.com/resource/a31af6371f478ef77b26500b9863f59a.png?x-oss-process=image/resize,w_412/format,webp/quality,Q_90",
          price: "￥99.00",
          name: "“足迹系列”保护套 照相机发明者达盖尔出生",
          desc: "超强净化能力，超低噪音，智能操控"
        },
        {
          img:
            "https://resource.smartisan.com/resource/71432ad30288fb860a4389881069b874.png?x-oss-process=image/resize,w_412/format,webp/quality,Q_90",
          price: "￥3499.00",
          name: "畅呼吸智能空气净化器",
          desc: "超强净化能力，超低噪音，智能操控",
          colors: ["#fff"]
        },
        {
          img:
            "https://resource.smartisan.com/resource/3bd5267edd7257e719e7965b756e2c2e.png?x-oss-process=image/resize,w_412/format,webp/quality,Q_90",
          price: "￥1299.00",
          name: "坚果 Pro",
          desc: "购机最高优惠500元",
          colors: ["#333", "red", "#888", "#fff", "#e32"]
        },
        {
          img:
            "https://resource.smartisan.com/resource/d9a4019f575264674c7826645ca7d33a.jpg?x-oss-process=image/resize,w_412/format,webp/quality,Q_90",
          price: "￥99.00",
          name: "Smartisan 半入耳式耳机 心动版",
          desc: "哑光表面、专业级调音",
          colors: ["blue", "red", "#333"]
        }
      ]
    };
  },
  mounted() {},
  methods: {
    mousemove() {
      var baseX =
        event.pageX - event.target.offsetWidth / 2 - event.target.offsetLeft;
      var baseY =
        event.pageY - event.target.offsetHeight / 2 - event.target.offsetTop;
      this.rotateX = baseY / -30;
      this.rotateY = baseX / 70;
      this.shadowX = baseX / -30;
      this.shadowY = baseY / -10;
      this.blur = 30;
    },
    mousemout() {
      this.rotateX = 0;
      this.rotateY = 0;
    }
  }
};
</script>
<style scoped lang="less">
.s-shop {
  width: 100%;
  text-align: center;
  background-color: #ededed;
  margin-top: 1px;
  padding-top: 25px;
  height: 1400px;
  .s-menus {
    width: 1220px;
    margin: 0 auto;
    height: 50px;
  }
  .s-banner {
    width: 1220px;
    height: 500px;
    margin: 0 auto;
    margin-bottom: 20px;
    .s-banner-items {
      .s-banner-item {
        position: absolute;
        z-index: 4;
        border: 1px solid #ddd;
        width: 1220px;
        height: 500px;
        border-radius: 10px;
        transform: rotateX(0deg) rotateY(0deg);
        box-shadow: 0px 0px 0px #ddd;

        .s-img1 {
          position: absolute;
          z-index: 1;
        }
        .s-img2 {
          position: absolute;
          z-index: 2;
        }
        .s-img3 {
          position: absolute;
          z-index: 3;
        }
        .s-img1,
        .s-img2,
        .s-img3 {
          margin-top: -27px;
          img {
            border-radius: 49px;
          }
        }
      }
      .s-banner-item:hover {
        // transform:rotate(0.8deg);
        transition: 0.5s;
      }
      .s-paganition {
        position: absolute;
        z-index: 5;
        width: 100px;
        height: 30px;
        bottom: 113px;
        left: 560px;
        text-align: center;
        ul {
          list-style: none;
          padding: 0;
          li {
            float: left;
            padding: 0 5px;
            .s-p-s {
              width: 10px;
              height: 10px;
              background: red;
              border-radius: 5px;
              display: inline-block;
            }
          }
        }
      }
    }
  }
  .s-1 {
    margin-top: 30px;
    width: 1220px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    overflow: hidden;
    ul {
      list-style: none;
      padding: 0;
      li {
        float: left;
        width: 25%;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          border: 1px solid #ddd;
        }
        img:hover {
          opacity: 0.7;
          transition: 0.5s;
        }
      }
    }
  }

  .s-hot {
    margin: 0 auto;
    width: 1220px;
    border: 1px solid #ddd;
    overflow: hidden;
    margin-top: 30px;
    background: #fff;
    text-align: left;
    border-radius: 8px;
    .s-hot-title {
      font-size: 18px;
      padding: 15px 0;
      margin-left: 30px;
      color: #888;
    }
    .s-hot-main {
      text-align: center;
      border-top: 1px solid #ddd;
      ul {
        margin: 0;
        padding: 0;
        li {
          float: left;
          list-style: none;
          width: 304px;
          border-left: 1px solid #f2f2f2;
          padding-top: 40px;
          cursor: pointer;
          img {
            width: 70%;
          }
          .name {
            font-size: 16px;
            box-sizing: border-box;
            width: 100%;
            padding: 0px 10px;
            overflow: hidden;
            font-size: 16px;
            line-height: 1.2;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #424242;
          }
          .desc {
            color: #e04e4e;
            border: 1ox solid;
            font-weight: 500;
          }
          .colors {
            position: absolute;
            border: 1px solid;
            // margin: 0 auto;
            text-align: center;
            .item {
							float: left;
              .item-color {
                width: 20px;
                height: 20px;
              }
            }
          }
          .price {
            position: relative;
            top: 30px;
            margin-bottom: 60px;
            font-weight: 800;
            display: inline-block;
            width: 100%;
            font-family: Arial;
            line-height: 1.2;
            text-align: center;
            p {
              color: #de4037;
              font-size: 18px;
              display: block;
            }
          }
          .btns-class {
            display: none;
            transition: all 0.15s ease;
            margin: 14px 0;
            .btn {
              display: inline-block;
              border: 1px solid #e1e1e1;
              border-radius: 4px;
              font-size: 12px;
              color: #646464;
              background-color: #f9f9f9;
              background-image: linear-gradient(180deg, #fff, #f9f9f9);
              transition: all 0.15s ease-out;
              text-decoration: none;
              width: 98px;
              padding: 7px 0;
              margin: 0 2px;
            }
            .btn-cart {
              border: 1px solid #5c81e3;
              color: #fff;
              background: #678ee7;
              background-image: linear-gradient(180deg, #678ee7, #5078df);
            }
            .btn-detail:hover {
              background-color: #eee;
              background-image: linear-gradient(180deg, #f5f5f5, #eee);
            }
            .btn-cart:hover {
              background-color: #6c8cd4;
              background-image: linear-gradient(180deg, #6c8cd4, #4769c2);
            }
          }
        }
        li:hover {
          box-shadow: inset 0 0 38px rgba(0, 0, 0, 0.08);
          transition: all 0.15s ease;
          .btns-class {
            display: block;
          }
          .price {
            p {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>