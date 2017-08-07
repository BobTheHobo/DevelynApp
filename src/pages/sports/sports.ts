import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, PopoverController } from 'ionic-angular';
import { SportsListPage } from '../sports-list/sports-list';
import * as $ from 'jquery';


/**
 * Generated class for the SportsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @Component({
 	selector: 'page-sports',
 	templateUrl: 'sports.html',
 })
 export class SportsPage {
 	public maxPrepsWidth;
 	constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public popoverCtrl: PopoverController) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad SportsPage');

 		$(document).ready(function(){
			setMaxPrepsWidget($('iframe').innerWidth(), $('iframe').innerHeight());
		});

		$(window).resize(function(){
			setMaxPrepsWidget($('iframe').innerWidth(), $('iframe').innerHeight());
		});

		function setMaxPrepsWidget(width, height){
			width = (parseInt(width)-15).toString();
			height = (parseInt(height)-20).toString();
			var code = '<script type="text/javascript" >(function(d){var mp = d.createElement("script"),h=d.getElementsByTagName("head")[0];mp.type="text/javascript";mp.async=true;mp.src="http://www.maxpreps.com/includes/js/widget/widget.compressed.js";h.appendChild(mp);})(document);</scrip'+'t><a class="maxpreps-widget-link" data-width="' + width + '" data-height="' + height + '" data-item-count="10" data-type="wall" data-include-header="true" data-member-id="d53a8ac6-69a7-4296-9f31-effb70d5a189" data-allow-scrollbar="true" data-link-color="006400" href="http://www.maxpreps.com/local/school/home.aspx?schoolid=0efc3aac-4b5a-49c4-a219-c7aa78250d14" >D\'Evelyn High School School Info</a>';
			$('#sportsWidget').attr('srcdoc', code);
		}
	}

	presentPopover(myEvent) {
		let popover = this.popoverCtrl.create(SportsListPage);
		popover.present({
			ev: myEvent
		});
	}
 }
