export interface IProduit {
    id_biere:number;
    nom:string;
    description:string;
    image:string;
    date_ajout?:string; // Champs non obligatoire...
    date_modif?:string;
    note_moyenne?:string;
    note_nombre?:string;
    brasserie:string;
    prix:number;    // Pas dans le TP...
}
