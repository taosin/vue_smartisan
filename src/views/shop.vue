<template>
	<div class="s-shop">
		<div class="s-banner">
			<div class="s-banner-items">
				<div class="s-banner-item">
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
				<div class="s-paganition">
					<ul class="s-p-ul">
						<li class="s-p-li">
							<div class="s-p-s"></div>
						</li>
						<li class="s-p-li">
							<div class="s-p-s"></div>
						</li>
						<li class="s-p-li">
							<div class="s-p-s"></div>
						</li>
						<li class="s-p-li">
							<div class="s-p-s"></div>
						</li>
						<li class="s-p-li">
							<div class="s-p-s"></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
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
	</div>
</template>
<script>
export default {
	components:{
	},
	data () {
		return {
			img1:'http://image.smartisanos.cn/resource/b/8/J1.png?x-oss-process=image/resize,w_1220/quality,Q_100/format,webp',
			img2:'http://image.smartisanos.cn/resource/e/3/J2.png?x-oss-process=image/resize,w_1220/quality,Q_100/format,webp',
			img3:'http://image.smartisanos.cn/resource/2/8/J3.png?x-oss-process=image/resize,w_1220/quality,Q_100/format,webp'
		}
	},
	mounted(){
	},
	methods:{
	}
}
</script>
<style scoped lang="less">
.s-shop{
	width: 100%;
	text-align: center;
	background-color: #ededed;
	margin-top: 1px;
	padding-top: 50px;
	height: 1400px;
	.s-banner{
		width: 1220px;
		height: 500px;
		margin: 0 auto;
		margin-bottom: 20px;
		.s-banner-items{
			.s-banner-item{
				position: absolute;
				z-index: 4;
				border: 1px solid #ddd;
				width: 1220px;
				height: 500px;
				border-radius: 10px;
				.s-img1{
					position: absolute;
					z-index: 1;
				}
				.s-img2{
					position: absolute;
					z-index: 2;
				}
				.s-img3{
					position: absolute;
					z-index: 3;
				}
				.s-img1,.s-img2, .s-img3{
					margin-top: -27px;
					img{
						border-radius: 49px;
					}
				}
			}
			.s-paganition{
				position: absolute;
				z-index: 5;
				width: 100px;
				height: 30px;
				bottom: 113px;
				left: 560px;
				text-align: center;
				ul{
					list-style: none;
					padding: 0;
					li{
						float: left;
						padding:0 5px;
						.s-p-s{
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
	.s-1{
		margin-top: 30px;
		width: 1220px;
		margin-left: auto;
		margin-right: auto;
		ul{
			list-style: none;
			padding:0;
			li{
				float: left;
				width: 25%;
				cursor: pointer;
				img{
					width: 100%;
					height: 100%;
					border: 1px solid #ddd;
				}
				img:hover{
					opacity: .4;
					transition:.5s;
				}
			}
		}
	}
}
</style>