import { Component, Input } from "@angular/core";

@Component({
    selector: "app-generic-table",
    templateUrl: "./generic-table.component.html",
})

export class GenericTableComponent {
    
    @Input() id: string = "";
    @Input() headers: string[] = [];
    @Input() rows: any[] = [];

    @Input() delete: () => void = () => {};
}