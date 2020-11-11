import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Client } from "../../../models/client";

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  public register(client: Client): Observable<any> {
    let body = new URLSearchParams();
    body.set("account", JSON.stringify(client));
    return this.http.post<any>(
      "http://localhost:8080/register",
      body.toString(),
      {
        headers: { "content-type": "application/x-www-form-urlencoded" }
      }
    );
  }

  public login(login: string, password: string): Observable<any> {
    const body = new URLSearchParams();
    body.set("login", login);
    body.set("password", password);
    return this.http.post<any>("http://localhost:8080/login", body.toString(), {
      headers: { "content-type": "application/x-www-form-urlencoded" }
    });
  }
}
