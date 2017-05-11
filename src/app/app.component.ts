import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '<h2>app works!</h2>';
  key = 'angularAlert.welcome'

  public options = {
        position: ["top", "right"],
        timeOut: 5000,
        lastOnBottom: true,
        animate: "scale"
  };

  constructor
  (
    private translateService: TranslateService,
    private notificationsService: NotificationsService
  ) {
        translateService.addLangs(["en", "fr"]);
        translateService.setDefaultLang('en');

        let browserLang = translateService.getBrowserLang();
        translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  handleClickAlertSuccessNominal() {
    console.log("handleClickAlertSuccess");
    this.translateService.get('angularAlert.welcome').subscribe((res: string) => {
        console.log("translateService.get",res);
        this.notificationsService.success(
            'Some Title',
            res,
            {
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
                maxLength: 500
            }
        )
    });

    
    
  }

  handleClickAlertSuccessTranslate() {
    this.notificationsService.success(
            'Some Title',
            "{{'angularAlert.welcome' | translate}}",
            {
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
                maxLength: 500
            }
        )
  }


  handleClickAlertHtmlTranslate() {

    this.notificationsService.html(
            "{{'angularAlert.welcome' | translate}}",
            'success',
            {
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
                maxLength: 10
            }
        )
  }

  handleClickAlertBareTranslate() {

    this.notificationsService.bare(
            'Some Title',
            "{{'angularAlert.welcome' | translate}}",
            {
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
                maxLength: 10
            }
        )
  }

    


}
