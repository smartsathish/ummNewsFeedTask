import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../Services/news-feed.service';
@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  newsNameList: any;
  newsFeedList: any;
  constructor(private newsFeedService: NewsFeedService) {
  }
  ngOnInit() {
    this.newsNameListFunct();
    this.getNewsFeedFrmUI(this.newsNameList.apple);
  }
  getNewsFeedFrmUI(data) {
    this.newsFeedService.getNewsFeed(data).subscribe(resp => {
      if (resp) {
        this.newsFeedList = resp.articles;        
        console.log(this.newsFeedList,"this.newsFeedList");
      } else {
        alert('Went wrong..please try again..');
      }
    });
  }
  getSpecificNews(data) {
    let obj = this.newsNameList;
    let result = obj.hasOwnProperty(data);    
    if (result) {
      this.getNewsFeedFrmUI(data)
      console.log(this.newsFeedList,"newsFeedList");
    } else {
      alert('Went wrong..please try again..');
    }
  }
  newsNameListFunct() {
    this.newsNameList = {
      apple: "apple",
      india: "india",
      cricket: "cricket",
      oscar: "cricket",
      technology: "technology",
      international: "international"
    }
  }
}
