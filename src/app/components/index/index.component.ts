import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { WhyjaraComponent } from '../whyjara/whyjara.component';
import { TopServicesComponent } from '../top-services/top-services.component';
import { TopclientsComponent } from '../topclients/topclients.component';
import { InfographComponent } from '../infograph/infograph.component';
import { PricesComponent } from '../prices/prices.component';
import { TestmonialsComponent } from './../testmonials/testmonials.component';
import { FAQComponent } from '../faq/faq.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
  NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    WhyjaraComponent,
    TopServicesComponent,
    TopclientsComponent,
    InfographComponent,
    PricesComponent,
    TestmonialsComponent,
    FAQComponent,
    ContactComponent,
    FooterComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
