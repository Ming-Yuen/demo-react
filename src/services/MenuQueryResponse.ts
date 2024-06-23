export interface MenuQueryResponse {

    success: string;
    menu: MenuItem[];


}
export interface MenuItem {
    id: string;
    parent: null | MenuItem;
    icon: null | string;
    name: string;
    type: string;
    link: string;
    roleId: number;
    child: null | MenuItem[];
}