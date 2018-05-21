 import{Component,ElementRef,Output,EventEmitter,DoCheck} from '@angular/core';
declare var $:any;
 @Component({
    selector: 'multi-autocomplete',
    host: {
        '(document:click)': 'handleClick($event)',
    },
    template:`
        <div class="container" >
            <div class="input-field">
              <input id="country" type="text" class="validate filter-input form-control" [(ngModel)]=query (keyup)=filter()>
           
            </div>
             <div class="suggestions" *ngIf="filteredList.length > 0"> 
                <ul class="none">
                    <li *ngFor="let item of filteredList" >
                       <input type="checkbox" [value]="item.uname" [checked]="isChecked" (change)="select(item)" [id]="item.id"> <a>{{item.uname}}</a>
                    </li>
                </ul>
             </div> 
        </div>  	
`,
  styleUrls: ['./multi-autocomplete.css']

          
})


export class MultiAutocompleteComponent  {
    public query = '';
    public selected = [];
    public countries = [ {id:1,uname:"BOG,Amruta Dhabale"},
    {id:2,uname:"Cg,Sushil Shah"},
{id:3,uname:"WTW,Amit Mahimkar"},
{id:4,uname:"WTW,Santosh Rajput"},
{id:5,uname:"BOG,Abhishek Bansal"},
{id:6,uname:"Bog,Shane S"}
    ]
    public filteredList = [];
    public elementRef;
    isChecked:boolean;
    @Output() onUserSelection= new EventEmitter();
    
    constructor(myElement: ElementRef) {
        this.elementRef = myElement;
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
   
    }


    filter() {
    if (this.query !== ""){
        this.filteredList = this.countries.filter(function(el){
            return el.uname.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    }else{
        this.filteredList = [];
    }
}
 
     select(item) {
         var checkbox = item.id;
         var isChecked = $('checkbox').prevObject['0'].activeElement.checked;
         console.log($('checkbox').prevObject['0'].activeElement.checked)
         if (isChecked == true) {
             if (this.selected.indexOf(item) == -1) {
                 this.selected.push(item);
                //  this.query = '';
                 // this.filteredList = [];
                    // this.isChecked=isChecked;
                 this.onUserSelection.emit(this.selected);
             }
         }
            else{
                var index=this.selected.indexOf(item);
                 this.selected.splice(index,1);
                 this.onUserSelection.emit(this.selected);
            }

}

handleClick(event){
   var clickedComponent = event.target;
   var inside = false;
   do {
       if (clickedComponent === this.elementRef.nativeElement) {
           inside = true;
       }
      clickedComponent = clickedComponent.parentNode;
   } while (clickedComponent);
    if(!inside){
        this.filteredList = [];
    }
}


}