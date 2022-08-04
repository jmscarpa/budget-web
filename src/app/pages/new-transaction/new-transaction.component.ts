import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: "app-new-transaction",
    templateUrl: "./new-transaction.component.html",
})

export class NewTransactionComponent implements OnInit{
    constructor(private api: ApiService){}

    ngOnInit(): void {}
}