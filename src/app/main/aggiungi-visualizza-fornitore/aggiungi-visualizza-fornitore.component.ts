import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/_services/api.service';

@Component({
  selector: 'app-aggiungi-visualizza-fornitore',
  templateUrl: './aggiungi-visualizza-fornitore.component.html',
  styleUrls: ['./aggiungi-visualizza-fornitore.component.scss']
})
export class AggiungiVisualizzaFornitoreComponent implements OnInit {

  liste: any;

  tradings: any[] = [];
  ufficiRD: any[] = [];
  fabbriche: any[] = [];
  materiali: any[] = [];
  categorie: any[] = [];
  sottocategorie: any[] = [];
  materialiProdotto: any[] = [];
  dimensioni: any[] = [];
  moqs: any[] = [];
  prezzi: any[] = [];
  campioni: any[] = [];
  produzioni: any[] = [];

  //creare oggetto fornitore vuoto any e collegare tutti input con ngmopdel a proprietà

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
  
    this.apiService.getItemsForm({}).subscribe((res: any) => {
			this.liste = res.result;
      console.log(this.liste); 
      this.tradings = this.liste.trading; 
      this.ufficiRD = this.liste.ufficiRD;
      this.fabbriche = this.liste.certificazioniFabbrica;
      this.materiali = this.liste.materiale;
      this.categorie = this.liste.fornitoreCategoria;
      this.sottocategorie = this.liste.fornitoreSubcategoria;
      this.materialiProdotto = this.liste.materialiProdotto;
      this.dimensioni = this.liste.dimensioni;
      this.moqs = this.liste.moq;
      this.prezzi = this.liste.prezzi; //
      this.campioni = this.liste.campioni
      this.produzioni = this.liste.produzioni //

		});
  }

  selectedTradings?: any;
  selectedUfficioRD?: any;
  selectedFabbriche?: any;
  selectedMateriali?: any;
  selectedCategorie?: any;
  selectedSottocategorie?: any;
  selectedCampioni?: any;
  selectedProduzioni?: any;
  selectedMaterialiProdotto?: any;
  selectedDimensioni?: any;
  selectedMoqs?: any;
  selectedPrezzi?: any;

  selectedFile = null;
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  onFileSelected(event: any)
  {
    this.selectedFile = event.target.files[0];
  }

  onUpload()
  {
    console.log(this.selectedFile); // You can use FormData upload to backend server
  }

}
