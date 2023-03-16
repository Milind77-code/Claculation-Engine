import { Component, Input, SimpleChanges,TemplateRef,ViewContainerRef , ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-ui-tab-group',
  templateUrl: './ui-tab-group.component.html',
  styleUrls: ['./ui-tab-group.component.scss']
})

export class UiTabGroupComponent {
    @Input() template: any;
    @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
    
    safeHtml!: SafeHtml;
    dynamicComponent:any;
    
    linkArray: SafeHtml[] = [];
    constructor(private sanitizer: DomSanitizer,) { }


    ngOnInit() { 
      console.log("inside init");    
    

      this.template.forEach((element: { link: string; }) => {
        this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(element.link )
        this.linkArray.push(this.safeHtml)
      });
     console.log(this.linkArray);
     
    }

    ngAfterViewInit(){
      console.log("inside afterview");
      
    }

    ngOnChanges(changes: SimpleChanges): void {
      console.log("inside onchange");
    //  this.template = changes['template']?.currentValue;
   
    }
    ngAfterContentInit(){
      console.log('after content init');
     
    }

  tabDesc =[
    {
      "label":"Organization Identifier",
      "link":"org-setup/org-identifier",
      "selector":"app-organization-identifier"
    },
    {
      "label":"Organization Address",
      "link":"org-setup/org-address",
      "selector":"app-organization-address"
    },
    {
      "label":"Organization Contact Person",
      "link":"org-setup/org-contact-persons",
      "selector":"app-organization-contact-persons"
    }
  ]
  //activeLink = this.tabDesc[0].link;
  

}
