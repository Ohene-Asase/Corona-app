import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StatisticsService } from 'src/app/Services/statistics.service';
import {GoogleCharts} from 'google-charts';



@Component({
  selector: 'app-corona-stats',
  templateUrl: './corona-stats.component.html',
  styleUrls: ['./corona-stats.component.scss']
})
export class CoronaStatsComponent implements OnInit {
  displayedColumns: string[] = ['Country', 'Total', 'Recovered', 'Deaths'];
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;


  usercountryCovidStats: any;
  allInfectedCountries: any[];
  userLocation: any;
  summary: any;
  worldCovidStats: any;
  countryFlags: any[];
  globalStats: any;
  matData = new MatTableDataSource(this.allInfectedCountries);
  _filteredCountries:any[];
  searchKey:string;

 constructor(private statService: StatisticsService) { }

  ngOnInit() {
    this.fetchStatistics();
    this.fetchcountriesflags();
    GoogleCharts.load(this.drawGeoChart, {
      'packages': ['geochart'],
      'mapsApiKey': 'AIzaSyDPK9ouKACub6fle05p_opelXjI4i0GurE'
  });
   
  }

async fetchcountriesflags() {
     this.countryFlags = await this.statService.getCountryFlag();
  }

 async fetchStatistics() {
    this.summary = await this.statService.getCovidStats();
    this.allInfectedCountries = this.summary.Countries;
    this.globalStats = this.summary.Global;
    this.allInfectedCountries.forEach((country) => {
      this.countryFlags.forEach((flags) => {
        if (flags.name === country.Country) {
          country.country_flag = flags.flag;
          this.matData = new MatTableDataSource(this.allInfectedCountries);
          this.matData.paginator = this.paginator;

        }

      })
    })

    await this.userCountryStats();
  }



  async userCountryStats() {
    this.userLocation = await this.statService.getUserLocation();
    if (this.userLocation && this.allInfectedCountries) {
      this.allInfectedCountries.map((countryStats: any) => {
        if (countryStats.Country === this.userLocation.country_name) {
          this.usercountryCovidStats = countryStats
      
        }

      })
    }
  }

  applyFilter(){
    this.matData.filter = this.searchKey.trim().toLowerCase()
  }
drawGeoChart(){
  /* Geo Chart */
  const geo_1_data = GoogleCharts.api.visualization.arrayToDataTable([
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700]
  ]);
  const geo_1_options = {
    
  }
  const geo_1_chart = new GoogleCharts.api.visualization.GeoChart(document.getElementById('geo'));
  geo_1_chart.draw(geo_1_data, geo_1_options);
}



}


