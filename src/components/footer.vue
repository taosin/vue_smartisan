<template>
	<footer class="s-footer">
		<div class="s-main">
			<div class="s-left">
				<ul class="s-pr-ul">
					<li v-for="menu in menus" class="s-pr-ul-li">
						<h3>{{menu.text}}</h3>
						<ul class="s-ch-ul">
							<li v-for="m in menu.child" class="s-ch-ul-li"><router-link :to="m.url">{{m.text}}</router-link></li>
						</ul>
					</li>
				</ul>
			</div>
			<div class="s-right">
				<h2>400-619-0909</h2>
				<p>周一至周日 9:00-18:00（仅收市话费）</p>
				<a class="s-help-btn">在线帮助</a>
			</div>
		</div>
		<div class="s-copyright">
			<div class="s-top">
				<h4>Copyright © 2017, Smartisan Digital Co., Ltd. All Rights Reserved.北京锤子数码科技有限公司</h4>
				<ul>
					<li><a>法律声明</a></li>
					<li><a>隐私条款</a></li>
					<li><a>开发者中心</a></li>
				</ul>
				<div>
					
				</div>
			</div>
			<div class="">
				
			</div>
		</div>
	</footer>
</template>
<script>
	export default {
		name: 'footer',
		data () {
			return {
				menus:[
				{ text:'订单服务', child:[ {text:'购买指南', url:'/hello' }, {text:'购买指南', url:'/hello' }, {text:'购买指南', url:'/hello' } ] },
				{ text:'服务支持', child:[ {text:'售后服务', url:'/hello' }, {text:'维修门店', url:'/hello' }, {text:'零售门店', url:'/hello' } ] },
				{ text:'自助服务', child:[ {text:'热点资讯', url:'/hello' }, {text:'预约购买', url:'/hello' }, {text:'订单物流', url:'/hello' } ] },
				{ text:'媒体中心', child:[ {text:'新闻动态', url:'/hello' }, {text:'官方视频', url:'/hello' }, {text:'图片资源', url:'/hello' } ] },
				{ text:'关于公司', child:[ {text:'公司简介', url:'/hello' }, {text:'加入我们', url:'/hello' }, {text:'联系我们', url:'/hello' } ] },
				{ text:'关注我们', child:[ {text:'新浪微博', url:'/hello' }, {text:'官方微信', url:'/hello' }, {text:'官方贴吧', url:'/hello' } ] },
				],
				current:0,
				ttio:true,
				tsio:0
			}
		},
		mounted(){
			// window.addEventListener('scroll', this.sscroll);
		},
		watch:{
		},
		methods:{
			// sscroll(){
			// 	const self = this;
			// 	let tsio = document.body.scrollTop||document.documentElement.scrollTop;
			// 	if(tsio === 0){
			// 		this.ttio = true;
			// 	}else{
			// 		this.ttio = false;
			// 	}
			// }
		}
	}
</script>
<style scoped lang="less">
	.s-footer{
		width: 100%;
		background: #fafafa;
		border-top: 1px solid #e6e6e6;
		display: block;
		.s-main{
			width: 1220px;
			margin: 0 auto;
			overflow: hidden;
			padding: 80px 0px 60px 0;
			border-bottom: 1px solid #e6e6e6;
			position: relative;
			.s-left{

				.s-pr-ul{
					padding: 0;
					.s-pr-ul-li{
						float: left;
						width: 149px;
						line-height: 1;
						text-align: left;
						h3{
							color: #646464;
							font-size: 12px;
							padding: 0 0 14px;
							font-weight: bold;
						}
					}
					.s-ch-ul{
						padding: 0;
						.s-ch-ul-li{
							padding: 6px 0;
							a{
								color: #c3c3c3;
								font-size: 12px;
								text-decoration: none;
								font-weight: bold;
								cursor: pointer;
								-webkit-transition: all .15s ease-out;
								transition: all .15s ease-out;
								text-decoration: none;
							}
							a:hover{
								color: #5079d9;
							}
						}
					}
				}
			}
			.s-right{
				text-align: right;
				width: 220px;
				float: right;
				h2{
					cursor: default;
					color: #646464;
					top: -2px;
					position: relative;
					transition: all .15s ease-out;
					text-decoration: none;
					font-size: 30px;
					line-height: 1;
					text-align: right;
				}
				p{
					clear: both;
					font-size: 12px;
					line-height: 18px;
					color: #c3c3c3;
					margin-top: -23px;
				}
				.s-help-btn{
					float: right;
					width: 102px;
					height: 32px;
					line-height: 32px;
					background: -webkit-linear-gradient(#fcfcfc,#f5f5f5);
					background: linear-gradient(#fcfcfc,#f5f5f5);
					cursor: pointer;
					font-size: 14px;
					padding: 0 0 0 26px;
					margin-top: 8px;
					text-align: left;
					color: #5079d9;
					border: 1px solid #dcdcdc;
					border-radius: 5px;
					font-weight: bold;
				}
				.s-help-btn:hover{
					background: #f5f5f5;
				}
				span{
					font-size: 18px;
					margin-right: 6px;
					top: -1px;
					position: relative;
					display: inline-block;
					font-family: SmartisanIconFont;
					vertical-align: middle;
				}
				span::before{
					content: "N";
				}
			}
		}
		.s-copyright{
			width: 1220px;
			margin: 0 auto;
			overflow: hidden;
			padding-bottom: 25px;
			.s-top{
				color: #434d55;
				font-size: 12px;
				padding: 40px 0;

				h4{
					float: left;
				}
				ul{
					padding: 0;
					float: left;
					margin-left: 10px;
					margin-top: 17px;
					li{
						float: left;
						line-height: 12px;
						padding: 1px 10px 0;
						border-left: 1px solid #ccc;
						a{
							color: #84a3e3;
							cursor: pointer;
							-webkit-transition: all .15s ease-out;
							transition: all .15s ease-out;
							text-decoration: none;
							font-weight: bold;
						}
					}
				}
			}
		}
		ul{
			li{
				list-style: none;
			}
		}
	}
</style>