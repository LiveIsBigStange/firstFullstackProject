import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  popup = document.querySelector<HTMLElement>(".popup")
  popupContent = document.querySelector<HTMLElement>(".popup-content");
  private showPopup(popup: HTMLElement, popupContent: HTMLElement): void {
    popup.style.display = "block";
    popupContent.style.display = "block";
  }

  private hidePopup(popup: HTMLElement, popupContent: HTMLElement): void {
    popup.style.display = "none";
    popupContent.style.display = "none";
  }

  private htmlElements(elem: HTMLElement | null): HTMLElement {
    return elem as HTMLElement;
  }

  ngOnInit() {
    this.showPopup(this.htmlElements(this.popup), this.htmlElements(this.popupContent));
    this.hidePopup(this.htmlElements(this.popup), this.htmlElements(this.popupContent));
  }

}
