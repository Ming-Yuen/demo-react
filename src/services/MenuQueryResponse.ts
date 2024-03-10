export interface MenuQueryResponse {

    success: string;
    menu: MenuItem[];


}
export interface MenuItem {
    parent: null | MenuItem;
    icon: null | string;
    title: string;
    type: string;
    link: string;
    roleId: number;
    child: null | MenuItem[];
}