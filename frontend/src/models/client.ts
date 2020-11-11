export class Client {

  constructor(){}

  public createClient(civilite: string, prenom: string, nom: string,  adresse: string, cp: string, ville: string,pays: string, tel: string, email: string, login: string, password: string): void{
    this.civilite = civilite; 
    this.prenom = prenom; 
    this.nom = nom; 
    this.adresse = adresse; 
    this.cp = cp; 
    this.ville = ville;
    this.pays = pays; 
    this.tel = tel;
    this.email = email; 
    this.login = login; 
    this.password = password;
  }

  public civilite: string; 
  public prenom: string; 
  public nom: string; 
  public adresse: string; 
  public cp: string; 
  public ville: string;
  public pays: string; 
  public tel: string;
  public email: string; 
  public login: string; 
  public password: string;
}
