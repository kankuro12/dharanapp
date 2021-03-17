import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  reviewBtnText = "Add A Review";
  current = 0.0;
  review_desc = "";
  reviews: any[] = [];
  rating: any;
  reviewmanage = false;
  url = Setting.url;
  @Input() totalreview: any[];
  @Input() product_id;
  currentRate = 3;
  zoomed = false;
  hasreview = false;
  waszoom=false;
  constructor(private client: ApiService, private auth: AuthserviceService) { }
  toogleZoom() {
    this.zoomed = !this.zoomed;
    this.refreshReviews();

  }
  refreshReviews() {
    if (this.zoomed) {
      this.reviews = this.totalreview;
    } else {
      this.reviews = this.totalreview.slice(0, 2);

    }
  }
  showAddReview() {
    this.reviewmanage = !this.reviewmanage;
    this.waszoom=this.zoomed;
    if(this.waszoom){
      console.log("zoomed1");
      this.toogleZoom();
    }
  }
  hideAddReview() {
    this.reviewmanage = !this.reviewmanage;
    if(this.waszoom){
      this.waszoom=false;
      this.toogleZoom();
      console.log("zoomed12");

    }
  }
  ngOnInit() {
    this.reviews = this.totalreview.slice(0, 2);
    if(this.auth.logged){

      this.totalreview.forEach(element => {
        if (element.user_id == this.auth.user.id) {
          this.hasreview = true;
          this.current = element.rating;
          this.review_desc = element.rating_desc;
          this.reviewBtnText = "Edit Review";
  
        }
      });
    }
  }
  AddReview() {
    this.client.postWithAuth(Setting.apiurl + "auth/addReview", {
      product_id: this.product_id,
      rating_desc: this.review_desc,
      title: "review",
      rating: this.current
    })
      .subscribe((res: any) => {
        let i = this.totalreview.findIndex(o => o.id == res.rating.id);
        console.log(i, "i console");
        if (i < 0) {
          this.totalreview.push(res.rating);
        } else {
          this.totalreview[i] = res.rating;
        }
        this.hasreview = true;

        if(this.waszoom){
          this.waszoom=false;
          this.toogleZoom();
          console.log("zoomed12");

        }
        this.refreshReviews();
        this.hideAddReview();
      },
        (err) => {
          alert('Rating Cannot Be Added Please Try Again');

        })
  }

}
