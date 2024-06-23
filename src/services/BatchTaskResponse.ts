export interface BatchTaskResponse {

    success: string;
    menu: BatchTaskResponse[];


}
export interface BatchTaskResponse {
    name:string;
    description:string;
    cron:string;
    enable:number;
    config:string;
}