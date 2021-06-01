(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jerem\Documents\Development\Research\fantasy\front-end\fantasy-app\src\main.ts */"zUnb");


/***/ }),

/***/ "05jv":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/draft/completed-draft-table/completed-draft-table.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CompletedDraftTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedDraftTableComponent", function() { return CompletedDraftTableComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/sleeper.service */ "ebv/");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/player.service */ "QIP1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");









function CompletedDraftTableComponent_mat_header_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Pick");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompletedDraftTableComponent_mat_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r10.pickNumber);
} }
function CompletedDraftTableComponent_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompletedDraftTableComponent_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.getTeamName(element_r11.rosterId));
} }
function CompletedDraftTableComponent_mat_header_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompletedDraftTableComponent_mat_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.getOwnerName(element_r12.rosterId));
} }
function CompletedDraftTableComponent_mat_header_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Selected Pick (current value)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompletedDraftTableComponent_mat_cell_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", element_r13.position + " " + element_r13.firstName + " " + element_r13.lastName, " - ", ctx_r7.sleeperService.selectedLeague.isSuperflex ? ((tmp_0_0 = ctx_r7.getPlayerBySleeperId(element_r13.sleeperId)) == null ? null : tmp_0_0.sf_trade_value) || "None" : ((tmp_0_0 = ctx_r7.getPlayerBySleeperId(element_r13.sleeperId)) == null ? null : tmp_0_0.trade_value) || "None", " ");
} }
function CompletedDraftTableComponent_mat_header_row_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-header-row");
} }
const _c0 = function (a0) { return { "accent__color__background": a0 }; };
function CompletedDraftTableComponent_mat_row_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-row", 13);
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, ctx_r9.sleeperService.sleeperUser.userData.username === ctx_r9.getOwnerName(row_r14.rosterId)));
} }
const _c1 = function (a0, a1, a2) { return [a0, a1, a2]; };
class CompletedDraftTableComponent {
    constructor(sleeperService, playerService) {
        this.sleeperService = sleeperService;
        this.playerService = playerService;
        this.displayedColumns = ['pickNumber', 'team', 'owner', 'selectedPlayer'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.pageLength = this.sleeperService.selectedLeague.totalRosters;
    }
    ngOnChanges() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.selectedDraft.picks);
        this.dataSource.paginator = this.paginator;
    }
    getTeamName(rosterId) {
        for (let team of this.sleeperService.sleeperTeamDetails) {
            if (team.roster.rosterId == rosterId) {
                return team.owner.teamName;
            }
        }
        return 'none';
    }
    getOwnerName(rosterId) {
        for (let team of this.sleeperService.sleeperTeamDetails) {
            if (team.roster.rosterId == rosterId) {
                return team.owner.ownerName;
            }
        }
        return 'none';
    }
    getPlayerBySleeperId(sleeperId) {
        return this.playerService.getPlayerBySleeperId(sleeperId);
    }
}
CompletedDraftTableComponent.ɵfac = function CompletedDraftTableComponent_Factory(t) { return new (t || CompletedDraftTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_3__["SleeperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"])); };
CompletedDraftTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CompletedDraftTableComponent, selectors: [["app-completed-draft-table"]], viewQuery: function CompletedDraftTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { selectedDraft: "selectedDraft" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 21, vars: 9, consts: [[1, "table-container", "margin-top-10", "mat-elevation-z8"], [1, "center-text", "mid-bold-text"], [1, "small-text__light", "margin-top-10", "center-text"], [1, "margin-top-10", 3, "dataSource"], ["matColumnDef", "pickNumber"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "team"], ["matColumnDef", "owner"], ["matColumnDef", "selectedPlayer"], [4, "matHeaderRowDef"], [3, "ngClass", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [3, "ngClass"]], template: function CompletedDraftTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " *Traded past picks are currently not updating properly ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CompletedDraftTableComponent_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CompletedDraftTableComponent_mat_cell_8_Template, 2, 1, "mat-cell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CompletedDraftTableComponent_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CompletedDraftTableComponent_mat_cell_11_Template, 2, 1, "mat-cell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CompletedDraftTableComponent_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CompletedDraftTableComponent_mat_cell_14_Template, 2, 1, "mat-cell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CompletedDraftTableComponent_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CompletedDraftTableComponent_mat_cell_17_Template, 2, 2, "mat-cell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CompletedDraftTableComponent_mat_header_row_18_Template, 1, 0, "mat-header-row", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, CompletedDraftTableComponent_mat_row_19_Template, 1, 3, "mat-row", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Completed Draft: ", ctx.selectedDraft.draft.rounds, " Rounds ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](5, _c1, ctx.pageLength, 2 * ctx.pageLength, 4 * ctx.pageLength));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV0ZWQtZHJhZnQtdGFibGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "1EFA":
/*!***********************************************************!*\
  !*** ./src/app/components/services/mock-draft.service.ts ***!
  \***********************************************************/
/*! exports provided: MockDraftService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockDraftService", function() { return MockDraftService; });
/* harmony import */ var _model_mockDraft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/mockDraft */ "Zsxa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sleeper.service */ "ebv/");



class MockDraftService {
    // picks: KTCPlayer[] = [];
    constructor(sleeperService) {
        this.sleeperService = sleeperService;
        this.teamPicks = [];
        this.selectablePlayers = [];
    }
    generateDraft(players, isSuperFlex = true, playerType = 1) {
        if (playerType === 1) { // rookies only
            this.selectablePlayers = players.filter(player => {
                return player.experience === 0 && player.position != 'PI';
            });
        }
        else if (playerType === 2) { // vets only
            this.selectablePlayers = players.filter(player => {
                return player.experience !== 0 && player.position != 'PI';
            });
        }
        else { // all players
            this.selectablePlayers = players.filter(player => {
                return player.position != 'PI';
            });
        }
        this.selectablePlayers.sort((playerA, playerB) => {
            if (this.sleeperService.selectedLeague.isSuperflex) {
                return playerB.sf_trade_value - playerA.sf_trade_value;
            }
            else {
                return playerB.trade_value - playerA.trade_value;
            }
        });
        // this.picks = players.filter(player => {
        //   return player.position === 'PI';
        // })
    }
    mapDraftObjects(teams) {
        if (this.teamPicks.length === 0) {
            teams.map(team => {
                for (const pick of team.draftCapital) {
                    this.teamPicks.push(new _model_mockDraft__WEBPACK_IMPORTED_MODULE_0__["TeamMockDraftPick"](((pick.round - 1) * 12) + pick.pick, this.createPickString(pick), team.owner.ownerName, team.owner.teamName));
                }
            });
            this.teamPicks.sort((pickA, pickB) => {
                return pickA.pick - pickB.pick;
            });
        }
    }
    createPickString(pick) {
        return pick.round.toString() + '.' + (pick.pick > 9 ? pick.pick.toString() : '0' + pick.pick.toString());
    }
    /**
     * reset variables when league is changed
     */
    reset() {
        this.teamPicks = [];
        this.selectablePlayers = [];
        // this.picks = [];
    }
}
MockDraftService.ɵfac = function MockDraftService_Factory(t) { return new (t || MockDraftService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_2__["SleeperService"])); };
MockDraftService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MockDraftService, factory: MockDraftService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "1P4D":
/*!***************************************************************************!*\
  !*** ./src/app/components/player-values/ktc-table/ktc-table.component.ts ***!
  \***************************************************************************/
/*! exports provided: KtcTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KtcTableComponent", function() { return KtcTableComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/sleeper.service */ "ebv/");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/player.service */ "QIP1");
/* harmony import */ var _services_player_comparison_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/player-comparison.service */ "Iwnn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");






















function KtcTableComponent_mat_header_cell_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function KtcTableComponent_mat_cell_28_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 26);
} }
function KtcTableComponent_mat_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, KtcTableComponent_mat_cell_28_span_2_Template, 1, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r15.full_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r15.experience === 0 && element_r15.position !== "PI");
} }
function KtcTableComponent_mat_header_cell_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function KtcTableComponent_mat_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", element_r17.position == "PI" ? "PICK" : element_r17.position, " ", ctx_r3.isSuperFlex ? element_r17.sf_position_rank : element_r17.position_rank, "");
} }
function KtcTableComponent_mat_header_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function KtcTableComponent_mat_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r18.age == -1 || !element_r18.age ? "??" : element_r18.age + " y.o.", " ");
} }
function KtcTableComponent_mat_header_cell_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r6.playerService.playerStatsYear, " Points");
} }
function KtcTableComponent_mat_cell_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r7.playerService.playerStats[element_r19.sleeper_id] == null ? null : ctx_r7.playerService.playerStats[element_r19.sleeper_id].pts_half_ppr) || "---");
} }
function KtcTableComponent_mat_header_cell_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Trade Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function KtcTableComponent_mat_cell_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r9.isSuperFlex ? element_r20.sf_trade_value : element_r20.trade_value, " ");
} }
function KtcTableComponent_mat_header_cell_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-cell");
} }
const _c0 = function (a1) { return ["../details", a1]; };
function KtcTableComponent_mat_cell_43_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "View Player Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, element_r21.name_id));
} }
const _c1 = function (a1) { return ["../../league/team", a1]; };
function KtcTableComponent_mat_cell_43_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "View Team Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c1, element_r21.owner));
} }
function KtcTableComponent_mat_cell_43_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KtcTableComponent_mat_cell_43_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-menu", null, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, KtcTableComponent_mat_cell_43_button_6_Template, 3, 3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KtcTableComponent_mat_cell_43_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const element_r21 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r28.openPlayerComparison(element_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Add to Player Comparison");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, KtcTableComponent_mat_cell_43_button_10_Template, 3, 3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r21.position !== "PI");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.sleeperService.selectedLeague && element_r21.position !== "PI");
} }
function KtcTableComponent_ng_container_44_mat_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function KtcTableComponent_ng_container_44_mat_cell_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r32.owner || "---");
} }
function KtcTableComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, KtcTableComponent_ng_container_44_mat_header_cell_1_Template, 2, 0, "mat-header-cell", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, KtcTableComponent_ng_container_44_mat_cell_2_Template, 2, 1, "mat-cell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function KtcTableComponent_mat_header_row_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
} }
const _c2 = function (a0) { return { "accent__color__background": a0 }; };
function KtcTableComponent_mat_row_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row", 34);
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, row_r33.name_id))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, (ctx_r14.sleeperService.sleeperUser == null ? null : ctx_r14.sleeperService.sleeperUser.userData == null ? null : ctx_r14.sleeperService.sleeperUser.userData.username) === (row_r33.owner == null ? null : row_r33.owner.toLowerCase()) && ctx_r14.sleeperService.selectedLeague));
} }
const _c3 = function () { return [25, 50, 100]; };
class KtcTableComponent {
    constructor(sleeperService, playerService, playerComparisonService, router) {
        this.sleeperService = sleeperService;
        this.playerService = playerService;
        this.playerComparisonService = playerComparisonService;
        this.router = router;
        this.filterPosGroup = [true, true, true, true, true];
        this.displayedColumns = [];
        /** mat table datasource */
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
        /** show rookies in table */
        this.showRookies = false;
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        this.isSuperFlex = ((_b = (_a = this.sleeperService) === null || _a === void 0 ? void 0 : _a.selectedLeague) === null || _b === void 0 ? void 0 : _b.isSuperflex) != undefined ? (_d = (_c = this.sleeperService) === null || _c === void 0 ? void 0 : _c.selectedLeague) === null || _d === void 0 ? void 0 : _d.isSuperflex : true;
        // this.displayedColumns = ['full_name', 'position', 'age', 'halfppr', 'valueRatio', this.isSuperFlex ? 'sf_trade_value' : 'trade_value', 'actions'];
        this.filteredPlayers = this.players.slice(0);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.filteredPlayers);
        this.dataSource.sortingDataAccessor = (item, property) => {
            var _a;
            switch (property) {
                case 'halfppr': return (_a = this.playerService.playerStats[item.sleeper_id]) === null || _a === void 0 ? void 0 : _a.pts_half_ppr;
                case 'valueRatio': return this.getValueRatio(item);
                default: return item[property];
            }
        };
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.updateSuperFlex();
    }
    updatePlayerFilters() {
        this.filteredPlayers = this.players.slice(0);
        const filterOptions = ['QB', 'RB', 'WR', 'TE', 'PI'];
        if (this.showRookies) {
            this.filteredPlayers = this.filteredPlayers.filter(player => {
                if (player.experience === 0 && player.position !== 'PI') {
                    return player;
                }
            });
        }
        for (let i = 0; i < this.filterPosGroup.length; i++) {
            if (!this.filterPosGroup[i]) {
                this.filteredPlayers = this.filteredPlayers.filter(player => {
                    if (player.position !== filterOptions[i]) {
                        return player;
                    }
                });
            }
        }
        if (this.searchVal && this.searchVal.length > 0) {
            this.filteredPlayers = this.filteredPlayers.filter(player => {
                var _a, _b;
                return (player.full_name.toLowerCase().indexOf(this.searchVal.toLowerCase()) >= 0 || ((_a = player.age) === null || _a === void 0 ? void 0 : _a.toString().indexOf(this.searchVal)) >= 0 || ((((_b = player.owner) === null || _b === void 0 ? void 0 : _b.toLowerCase().indexOf(this.searchVal.toLowerCase())) >= 0) && this.sleeperService.selectedLeague));
            });
        }
        this.dataSource.data = this.filteredPlayers;
    }
    updateSuperFlex() {
        this.displayedColumns = [];
        if (this.sleeperService.selectedLeague) {
            this.displayedColumns = ['full_name', 'position', 'age', 'owner', 'halfppr', this.isSuperFlex ? 'sf_trade_value' : 'trade_value', 'actions'];
        }
        else {
            this.displayedColumns = ['full_name', 'position', 'age', 'halfppr', this.isSuperFlex ? 'sf_trade_value' : 'trade_value', 'actions'];
        }
        this.dataSource.data = this.filteredPlayers;
        this.dataSource.sort.sort({
            id: this.isSuperFlex ? 'sf_trade_value' : 'trade_value',
            start: 'desc',
            disableClear: false
        });
    }
    getValueRatio(player) {
        var _a, _b;
        return Math.round((this.isSuperFlex ? player.sf_trade_value : player.trade_value) / (((_a = this.playerService.playerStats[player.sleeper_id]) === null || _a === void 0 ? void 0 : _a.pts_half_ppr) / ((_b = this.playerService.playerStats[player.sleeper_id]) === null || _b === void 0 ? void 0 : _b.gp))) || '---';
    }
    openPlayerComparison(element) {
        this.playerComparisonService.addPlayerToCharts(element);
        this.router.navigateByUrl('players/comparison');
    }
}
KtcTableComponent.ɵfac = function KtcTableComponent_Factory(t) { return new (t || KtcTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_4__["SleeperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_player_comparison_service__WEBPACK_IMPORTED_MODULE_6__["PlayerComparisonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
KtcTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: KtcTableComponent, selectors: [["app-ktc-table"]], viewQuery: function KtcTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { players: "players" }, decls: 50, vars: 18, consts: [[1, "table-container"], [1, "button-left", "player-value-checkbox-margin", "mat-dropdown-wide-300"], ["matInput", "", "type", "text", 3, "ngModel", "keyup", "ngModelChange"], [1, "button-left"], ["color", "primary", 1, "player-value-checkbox-margin", 3, "ngModel", "ngModelChange", "change"], [1, "container_spacer"], [1, "button-right"], [1, "margin-top-10", "mat-elevation-z8", 3, "hidden"], ["matSort", "", "matSortDirection", "desc", 3, "dataSource", "matSortActive"], ["matColumnDef", "full_name"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "position"], ["matColumnDef", "age"], ["matColumnDef", "halfppr"], [3, "matColumnDef"], ["matColumnDef", "actions"], [4, "matHeaderCellDef"], [3, "click", 4, "matCellDef"], ["matColumnDef", "owner", 4, "ngIf"], [4, "matHeaderRowDef"], ["class", "ktc-table-element-row", 3, "routerLink", "ngClass", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [1, "mid-bold-text", "center-text", "warning__alert", 3, "hidden"], ["mat-sort-header", ""], ["matBadge", "R", "matBadgeOverlap", "false", 4, "ngIf"], ["matBadge", "R", "matBadgeOverlap", "false"], [3, "click"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "routerLink"], ["matColumnDef", "owner"], [1, "ktc-table-element-row", 3, "routerLink", "ngClass"]], template: function KtcTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Search Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function KtcTableComponent_Template_input_keyup_5_listener() { return ctx.updatePlayerFilters(); })("ngModelChange", function KtcTableComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchVal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KtcTableComponent_Template_mat_checkbox_ngModelChange_8_listener($event) { return (ctx.filterPosGroup[0] = $event); })("change", function KtcTableComponent_Template_mat_checkbox_change_8_listener() { return ctx.updatePlayerFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "QB");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KtcTableComponent_Template_mat_checkbox_ngModelChange_10_listener($event) { return (ctx.filterPosGroup[1] = $event); })("change", function KtcTableComponent_Template_mat_checkbox_change_10_listener() { return ctx.updatePlayerFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "RB");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KtcTableComponent_Template_mat_checkbox_ngModelChange_12_listener($event) { return (ctx.filterPosGroup[2] = $event); })("change", function KtcTableComponent_Template_mat_checkbox_change_12_listener() { return ctx.updatePlayerFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "WR");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KtcTableComponent_Template_mat_checkbox_ngModelChange_14_listener($event) { return (ctx.filterPosGroup[3] = $event); })("change", function KtcTableComponent_Template_mat_checkbox_change_14_listener() { return ctx.updatePlayerFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "TE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KtcTableComponent_Template_mat_checkbox_ngModelChange_16_listener($event) { return (ctx.filterPosGroup[4] = $event); })("change", function KtcTableComponent_Template_mat_checkbox_change_16_listener() { return ctx.updatePlayerFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Picks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-slide-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KtcTableComponent_Template_mat_slide_toggle_ngModelChange_20_listener($event) { return ctx.showRookies = $event; })("change", function KtcTableComponent_Template_mat_slide_toggle_change_20_listener() { return ctx.updatePlayerFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Rookies Only ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-slide-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KtcTableComponent_Template_mat_slide_toggle_ngModelChange_22_listener($event) { return ctx.isSuperFlex = $event; })("change", function KtcTableComponent_Template_mat_slide_toggle_change_22_listener() { return ctx.updateSuperFlex(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " SuperFlex ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](26, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, KtcTableComponent_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, KtcTableComponent_mat_cell_28_Template, 3, 2, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](29, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, KtcTableComponent_mat_header_cell_30_Template, 2, 0, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, KtcTableComponent_mat_cell_31_Template, 2, 2, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](32, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, KtcTableComponent_mat_header_cell_33_Template, 2, 0, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, KtcTableComponent_mat_cell_34_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](35, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, KtcTableComponent_mat_header_cell_36_Template, 2, 1, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, KtcTableComponent_mat_cell_37_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](38, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, KtcTableComponent_mat_header_cell_39_Template, 2, 0, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, KtcTableComponent_mat_cell_40_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](41, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, KtcTableComponent_mat_header_cell_42_Template, 1, 0, "mat-header-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, KtcTableComponent_mat_cell_43_Template, 11, 3, "mat-cell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, KtcTableComponent_ng_container_44_Template, 3, 0, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, KtcTableComponent_mat_header_row_45_Template, 1, 0, "mat-header-row", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, KtcTableComponent_mat_row_46_Template, 1, 6, "mat-row", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "mat-paginator", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "No results found. Try a different search.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchVal);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterPosGroup[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterPosGroup[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterPosGroup[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterPosGroup[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterPosGroup[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.showRookies);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.isSuperFlex);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.filteredPlayers.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matSortActive", ctx.isSuperFlex ? "sf_trade_value" : "trade_value");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matColumnDef", ctx.isSuperFlex ? "sf_trade_value" : "trade_value");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.sleeperService.selectedLeague);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.filteredPlayers.length > 0);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadge"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["DefaultClassDirective"]], styles: [".ktc-table-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 8px 24px 24px;\r\n  min-width: 300px;\r\n}\r\n\r\n.ktc-table-header[_ngcontent-%COMP%] {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-column-position[_ngcontent-%COMP%], .mat-column-age[_ngcontent-%COMP%], .mat-column-actions[_ngcontent-%COMP%] {\r\n  max-width: 82px;\r\n}\r\n\r\n.ktc-table-element-row[_ngcontent-%COMP%]:hover {\r\n  background: #c33163;\r\n}\r\n\r\n.ktc-table-element-row[_ngcontent-%COMP%]:active {\r\n  background: #c33163;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImt0Yy10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJrdGMtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rdGMtdGFibGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogOHB4IDI0cHggMjRweDtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4ua3RjLXRhYmxlLWhlYWRlciB7XHJcbiAgbWluLWhlaWdodDogNjRweDtcclxuICBwYWRkaW5nOiA4cHggMjRweCAwO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1wb3NpdGlvbixcclxuLm1hdC1jb2x1bW4tYWdlLFxyXG4ubWF0LWNvbHVtbi1hY3Rpb25zIHtcclxuICBtYXgtd2lkdGg6IDgycHg7XHJcbn1cclxuXHJcbi5rdGMtdGFibGUtZWxlbWVudC1yb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNjMzMxNjM7XHJcbn1cclxuXHJcbi5rdGMtdGFibGUtZWxlbWVudC1yb3c6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjYzMzMTYzO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "2KAN":
/*!*********************************************!*\
  !*** ./src/app/components/model/matchup.ts ***!
  \*********************************************/
/*! exports provided: ScheduleComp, WeeklyRecordComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComp", function() { return ScheduleComp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyRecordComp", function() { return WeeklyRecordComp; });
class ScheduleComp {
    constructor(rosterId, record) {
        this.rosterId = rosterId;
        this.record = record;
    }
}
class WeeklyRecordComp {
    constructor(rosterId, records, wins, loss, ties) {
        this.rosterId = rosterId;
        this.totalWins = wins;
        this.totalLosses = loss;
        this.totalTies = ties;
        this.records = records;
    }
}


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _base_component_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component.abstract */ "W5wg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sleeper.service */ "ebv/");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");








class HeaderComponent extends _base_component_abstract__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"] {
    constructor(sleeperService) {
        super();
        this.sleeperService = sleeperService;
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_2__["SleeperService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 2, consts: [[1, "app-header"], ["color", "primary"], ["mat-button", "", "routerLink", "./home"], [1, "header-icon"], ["mat-button", "", 3, "matMenuTriggerFor"], ["leagueMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "./league/rankings"], ["mat-menu-item", "", "routerLink", "./league/playoff/calculator"], ["mat-menu-item", "", "routerLink", "./league/draft"], [2, "font-size", "22px"], ["playerMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "./players/values"], ["mat-menu-item", "", "routerLink", "./players/comparison"], [1, "spacer"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "people");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " League");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-menu", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Power Rankings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Standings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Draft Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Players");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-menu", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Player Values");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Player Comparisons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "group_add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Change League");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r1);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"]], styles: [".spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "2u70":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/playoff-calculator/weekly-record-vs-all/weekly-record-vs-all.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: WeeklyRecordVsAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyRecordVsAllComponent", function() { return WeeklyRecordVsAllComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/sleeper.service */ "ebv/");
/* harmony import */ var _services_matchup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/matchup.service */ "pxwm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");









function WeeklyRecordVsAllComponent_div_0_mat_header_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Teams");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WeeklyRecordVsAllComponent_div_0_mat_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.matchupService.getTeamName(element_r8.rosterId, ctx_r2.sleeperService.sleeperTeamDetails));
} }
function WeeklyRecordVsAllComponent_div_0_ng_container_5_mat_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Week ", col_r9, "");
} }
const _c0 = function (a0) { return { "disabled__color": a0 }; };
function WeeklyRecordVsAllComponent_div_0_ng_container_5_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const col_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, element_r13.records[col_r9][0] === 0 && element_r13.records[col_r9][1] === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.getRecord(element_r13, col_r9));
} }
function WeeklyRecordVsAllComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WeeklyRecordVsAllComponent_div_0_ng_container_5_mat_header_cell_2_Template, 2, 1, "mat-header-cell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WeeklyRecordVsAllComponent_div_0_ng_container_5_mat_cell_3_Template, 2, 4, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matColumnDef", col_r9);
} }
function WeeklyRecordVsAllComponent_div_0_mat_header_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Total Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WeeklyRecordVsAllComponent_div_0_mat_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.getTotalRecord(element_r15));
} }
function WeeklyRecordVsAllComponent_div_0_mat_header_row_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-header-row");
} }
function WeeklyRecordVsAllComponent_div_0_mat_row_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-row");
} }
function WeeklyRecordVsAllComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WeeklyRecordVsAllComponent_div_0_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, WeeklyRecordVsAllComponent_div_0_mat_cell_4_Template, 2, 1, "mat-cell", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, WeeklyRecordVsAllComponent_div_0_ng_container_5_Template, 4, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, WeeklyRecordVsAllComponent_div_0_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, WeeklyRecordVsAllComponent_div_0_mat_cell_8_Template, 2, 1, "mat-cell", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, WeeklyRecordVsAllComponent_div_0_mat_header_row_9_Template, 1, 0, "mat-header-row", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, WeeklyRecordVsAllComponent_div_0_mat_row_10_Template, 1, 0, "mat-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.displayColumns.slice(1, ctx_r0.displayColumns.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayColumns);
} }
class WeeklyRecordVsAllComponent {
    constructor(sleeperService, matchupService) {
        this.sleeperService = sleeperService;
        this.matchupService = matchupService;
        this.displayColumns = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.displayColumns = this.generateCols();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.matchupService.weeklyComparison);
    }
    ngAfterViewInit() {
        this.dataSource.sortingDataAccessor = (item, property) => {
            switch (property) {
                case 'total': return item.totalWins;
                default: return item.records[property][0];
            }
        };
        this.dataSource.sort = this.sort;
    }
    /**
     * generate col values
     * @private
     */
    generateCols() {
        const list = ['teams'];
        for (let i = this.sleeperService.selectedLeague.startWeek; i < this.sleeperService.selectedLeague.playoffStartWeek; i++) {
            list.push(i.toString());
        }
        list.push('total');
        return list;
    }
    /**
     * return record string to display
     * @param element
     * @param col
     */
    getRecord(element, col) {
        return `${element.records[col][0]}-${element.records[col][1]}` + (element.records[col][2] > 0 ? `-${element.records[col][2]}` : '');
    }
    /**
     * return total record string
     * @param element
     */
    getTotalRecord(element) {
        return `${element.totalWins}-${element.totalLosses}` + (element.totalTies > 0 ? `-${element.totalTies}` : '');
    }
}
WeeklyRecordVsAllComponent.ɵfac = function WeeklyRecordVsAllComponent_Factory(t) { return new (t || WeeklyRecordVsAllComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_3__["SleeperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_matchup_service__WEBPACK_IMPORTED_MODULE_4__["MatchupService"])); };
WeeklyRecordVsAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WeeklyRecordVsAllComponent, selectors: [["app-weekly-record-vs-all"]], viewQuery: function WeeklyRecordVsAllComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 1, vars: 1, consts: [["class", "margin-top-10 table-container", 4, "ngIf"], [1, "margin-top-10", "table-container"], ["matSort", "", "matSortActive", "total", "matSortDirection", "desc", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "teams"], [4, "matHeaderCellDef"], [4, "matCellDef"], [4, "ngFor", "ngForOf"], ["matColumnDef", "total"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["class", "mat-table-center-text", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "mat-table-center-text", 3, "ngClass", 4, "matCellDef"], ["mat-sort-header", "", 1, "mat-table-center-text"], [1, "mat-table-center-text", 3, "ngClass"], ["mat-sort-header", ""]], template: function WeeklyRecordVsAllComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, WeeklyRecordVsAllComponent_div_0_Template, 11, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.displayColumns.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWVrbHktcmVjb3JkLXZzLWFsbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "8/9n":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/components/fantasy-team-details/fantasy-team-details-weekly-points-chart/fantasy-team-details-weekly-points-chart.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: FantasyTeamDetailsWeeklyPointsChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FantasyTeamDetailsWeeklyPointsChartComponent", function() { return FantasyTeamDetailsWeeklyPointsChartComponent; });
/* harmony import */ var chartjs_plugin_colorschemes_src_plugins_plugin_colorschemes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes */ "icLC");
/* harmony import */ var chartjs_plugin_colorschemes_src_colorschemes_colorschemes_tableau__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau */ "6QYa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/sleeper.service */ "ebv/");
/* harmony import */ var _services_matchup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/matchup.service */ "pxwm");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "LPYB");






class FantasyTeamDetailsWeeklyPointsChartComponent {
    constructor(sleeperService, matchupService) {
        this.sleeperService = sleeperService;
        this.matchupService = matchupService;
        /** line chart data*/
        this.lineChartData = [];
        /** line chart labels*/
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
                intersect: false,
                mode: 'index',
                position: 'nearest',
            },
            scales: {
                xAxes: [{
                        display: true,
                        gridLines: {
                            display: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'MatchUp',
                            fontColor: '#d3d3d3'
                        }
                    }],
                yAxes: [{
                        display: true,
                        gridLines: {
                            display: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Fantasy Points',
                            fontColor: '#d3d3d3'
                        }
                    }],
            },
            plugins: {
                colorschemes: {
                    scheme: chartjs_plugin_colorschemes_src_colorschemes_colorschemes_tableau__WEBPACK_IMPORTED_MODULE_1__["Classic10"],
                    override: true
                }
            }
        };
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        this.lineChartPlugins = [];
    }
    ngOnInit() {
        this.createMatchupDataSets();
        this.matchupService.initMatchUpCharts(this.sleeperService.selectedLeague);
    }
    createMatchupDataSets() {
        const weeklyPoints = [];
        const oppPoints = [];
        const numOfWeeks = (Number(this.sleeperService.selectedYear) < 2021 ? 17 : 18);
        for (let i = 0; i <= numOfWeeks; i++) {
            const week = this.sleeperService.selectedLeague.leagueMatchUps[i];
            if (week) {
                for (let matchup of week) {
                    if (matchup.rosterId === this.selectedTeam.roster.rosterId) {
                        weeklyPoints[i] = matchup.points;
                        const matchId = matchup.matchupId;
                        for (let matchup of week) {
                            if (matchup.matchupId == matchId && matchup.rosterId !== this.selectedTeam.roster.rosterId) {
                                oppPoints[i] = matchup.points;
                                this.lineChartLabels.push('Week ' + i + ' vs. ' + this.sleeperService.getTeamByRosterId(matchup.rosterId).owner.teamName);
                                break;
                            }
                        }
                        break;
                    }
                }
            }
        }
        this.lineChartData.push({ label: this.selectedTeam.owner.teamName, data: weeklyPoints.slice(this.sleeperService.selectedLeague.startWeek) });
        this.lineChartData.push({ label: 'Opponent', data: oppPoints.slice(this.sleeperService.selectedLeague.startWeek) });
    }
}
FantasyTeamDetailsWeeklyPointsChartComponent.ɵfac = function FantasyTeamDetailsWeeklyPointsChartComponent_Factory(t) { return new (t || FantasyTeamDetailsWeeklyPointsChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_3__["SleeperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_matchup_service__WEBPACK_IMPORTED_MODULE_4__["MatchupService"])); };
FantasyTeamDetailsWeeklyPointsChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FantasyTeamDetailsWeeklyPointsChartComponent, selectors: [["app-fantasy-team-details-weekly-points-chart"]], inputs: { selectedTeam: "selectedTeam" }, decls: 2, vars: 6, consts: [[1, "margin-top-50", 2, "display", "block"], ["baseChart", "", "width", "600", "height", "400", 3, "datasets", "labels", "options", "legend", "chartType", "plugins"]], template: function FantasyTeamDetailsWeeklyPointsChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_5__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYW50YXN5LXRlYW0tZGV0YWlscy13ZWVrbHktcG9pbnRzLWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "A9Rc":
/*!**************************************!*\
  !*** ./src/app/model/SleeperUser.ts ***!
  \**************************************/
/*! exports provided: SleeperUserData, CompletedDraft, SleeperLeagueData, SleeperData, DraftCapital */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleeperUserData", function() { return SleeperUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedDraft", function() { return CompletedDraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleeperLeagueData", function() { return SleeperLeagueData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleeperData", function() { return SleeperData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftCapital", function() { return DraftCapital; });
class SleeperUserData {
}
class CompletedDraft {
    constructor(draft, picks) {
        this.draft = draft;
        this.picks = picks;
    }
}
class SleeperLeagueData {
    constructor(b, name, league_id, total_rosters, roster_positions, previous_league_id, status, metadata, settings) {
        this.isSuperflex = true;
        this.divisionNames = [];
        this.isSuperflex = b;
        this.name = name;
        this.leagueId = league_id;
        this.totalRosters = total_rosters;
        this.rosterPositions = roster_positions;
        this.prevLeagueId = previous_league_id;
        this.status = status;
        this.divisions = settings.divisions;
        for (let i = 0; i < this.divisions; i++) {
            this.divisionNames.push(metadata ? metadata[`division_${i + 1}`] : `Division ${i + 1}`);
        }
        this.playoffTeams = settings.playoff_teams;
        this.startWeek = settings.start_week;
        this.playoffStartWeek = settings.playoff_week_start;
    }
}
class SleeperData {
}
class DraftCapital {
    constructor(b, round, number, year) {
        this.isFirstOwner = b;
        this.round = round;
        this.pick = number;
        this.year = year;
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BCR2":
/*!*************************************************!*\
  !*** ./src/app/services/api/ktc-api.service.ts ***!
  \*************************************************/
/*! exports provided: KTCApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTCApiService", function() { return KTCApiService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ktc_api_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ktc-api-config.service */ "PX4D");





class KTCApiService {
    constructor(http, ktcApiConfigService) {
        this.http = http;
        this.ktcApiConfigService = ktcApiConfigService;
    }
    getPlayerValuesForToday() {
        return this.playersList ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.playersList) : this.refreshPlayerValuesForToday();
    }
    refreshPlayerValuesForToday() {
        return this.http.get(this.ktcApiConfigService.getPlayerValuesForTodayEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((players) => this.playersList = players));
    }
    getHistoricalPlayerValueById(nameId) {
        return this.http.get(this.ktcApiConfigService.getHistoricalPlayerValues + nameId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((players) => players));
    }
}
KTCApiService.ɵfac = function KTCApiService_Factory(t) { return new (t || KTCApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ktc_api_config_service__WEBPACK_IMPORTED_MODULE_4__["KTCApiConfigService"])); };
KTCApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: KTCApiService, factory: KTCApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _base_component_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component.abstract */ "W5wg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _services_api_sleeper_sleeper_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/sleeper/sleeper-api.service */ "L2kU");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sleeper.service */ "ebv/");
/* harmony import */ var _services_power_rankings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/power-rankings.service */ "UNAG");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/player.service */ "QIP1");
/* harmony import */ var _services_mock_draft_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/mock-draft.service */ "1EFA");
/* harmony import */ var _services_matchup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/matchup.service */ "pxwm");
/* harmony import */ var _services_playoff_calculator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/playoff-calculator.service */ "QOKW");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");


















function HomeComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.userName = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", year_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](year_r6);
} }
function HomeComponent_div_21_mat_form_field_13_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const league_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", league_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](league_r9.name);
} }
function HomeComponent_div_21_mat_form_field_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select a league");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_21_mat_form_field_13_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.selectedLeague = $event; })("selectionChange", function HomeComponent_div_21_mat_form_field_13_Template_mat_select_selectionChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.loadLeague($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeComponent_div_21_mat_form_field_13_mat_option_4_Template, 2, 2, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r7.selectedLeague);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.sleeperService.sleeperUser.leagues);
} }
function HomeComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Hello ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "! We found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " leagues linked to this account in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomeComponent_div_21_mat_form_field_13_Template, 5, 2, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.sleeperService.sleeperUser.userData.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.sleeperService.sleeperUser.leagues.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.sleeperService.selectedYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.sleeperService.sleeperUser.leagues.length > 0);
} }
function HomeComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Congratulations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " was loaded successfully! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.sleeperService.sleeperUser.userData.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.selectedLeague.name);
} }
class HomeComponent extends _base_component_abstract__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"] {
    constructor(spinner, sleeperApiService, sleeperService, powerRankingService, playersService, mockDraftService, matchupService, playoffCalculatorService) {
        super();
        this.spinner = spinner;
        this.sleeperApiService = sleeperApiService;
        this.sleeperService = sleeperService;
        this.powerRankingService = powerRankingService;
        this.playersService = playersService;
        this.mockDraftService = mockDraftService;
        this.matchupService = matchupService;
        this.playoffCalculatorService = playoffCalculatorService;
        this.pathSource = './assets/cn.jpg';
        this.userName = '';
        this.supportedYears = [];
    }
    ngOnInit() {
        var _a, _b;
        this.supportedYears = this.generateYears();
        if (!this.sleeperService.selectedYear) {
            this.selectedYear = this.supportedYears[0];
        }
        else {
            this.selectedYear = this.sleeperService.selectedYear;
        }
        this.userName = ((_b = (_a = this.sleeperService.sleeperUser) === null || _a === void 0 ? void 0 : _a.userData) === null || _b === void 0 ? void 0 : _b.username) || '';
        this.selectedLeague = this.sleeperService.selectedLeague || null;
        this.playersService.loadPlayerValuesForToday();
    }
    fetchSleeperInfo() {
        this.sleeperService.loadNewUser(this.userName, this.selectedYear);
        this.sleeperService.selectedYear = this.selectedYear;
        this.sleeperService.resetLeague();
    }
    loadLeague(value) {
        this.sleeperService.resetLeague();
        this.selectedLeague = value;
        this.spinner.show();
        if (this.selectedLeague !== this.sleeperService.selectedLeague) {
            this.powerRankingService.reset();
            this.mockDraftService.reset();
            this.playoffCalculatorService.reset();
            this.matchupService.reset();
            this.playersService.resetOwners();
            console.time('Fetch Sleeper League Data');
            this.addSubscriptions(this.sleeperService.$loadNewLeague(this.selectedLeague).subscribe((x) => {
                this.spinner.hide();
                this.sleeperService.sleeperTeamDetails.map((team) => {
                    this.playersService.generateRoster(team);
                });
                this.sleeperService.leagueLoaded = true;
                console.timeEnd('Fetch Sleeper League Data');
            }));
        }
    }
    generateYears() {
        const years = [];
        let currentYear = new Date().getFullYear();
        for (let i = 0; i < 16; i++) {
            years.push((currentYear - i).toString());
        }
        return years;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_sleeper_sleeper_api_service__WEBPACK_IMPORTED_MODULE_3__["SleeperApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_4__["SleeperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_power_rankings_service__WEBPACK_IMPORTED_MODULE_5__["PowerRankingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_6__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mock_draft_service__WEBPACK_IMPORTED_MODULE_7__["MockDraftService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_matchup_service__WEBPACK_IMPORTED_MODULE_8__["MatchupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_playoff_calculator_service__WEBPACK_IMPORTED_MODULE_9__["PlayoffCalculatorService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 7, consts: [[1, "center-text", "margin-top-10", "large-bold-header-text"], [1, "flex-start-container", "margin-top-50"], [1, "flex-item-home", "grid-75", "center-text", "margin-top-25"], [1, "mid-bold-text"], [1, "mat-dropdown-wide-200"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["appearance", "standard"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["class", "margin-top-25", 4, "ngIf"], [1, "grid-25", "flex-item-home"], [1, "community-box", "center-text"], [1, "mid-bold-text", "margin-top-10"], ["src", "https://discord.com/widget?id=837372928005767220&theme=dark", "width", "350", "height", "500", "allowtransparency", "true", "frameborder", "0", "sandbox", "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts", 1, "discord-widget"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [3, "value"], [1, "margin-top-25"], [1, "warning__alert"], ["appearance", "standard", 4, "ngIf"], [3, "ngModel", "ngModelChange", "selectionChange"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Welcome to the website!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Let's get started!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Sleeper Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_10_listener($event) { return ctx.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeComponent_button_11_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Select a year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_mat_select_ngModelChange_16_listener($event) { return ctx.selectedYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomeComponent_mat_option_17_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_19_listener() { return ctx.fetchSleeperInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Sign In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HomeComponent_div_21_Template, 14, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HomeComponent_div_22_Template, 8, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Join Our Community");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "iframe", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.supportedYears);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.userName || ctx.userName == (ctx.sleeperService.sleeperUser == null ? null : ctx.sleeperService.sleeperUser.userData == null ? null : ctx.sleeperService.sleeperUser.userData.username) && ctx.selectedYear == ctx.sleeperService.selectedYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sleeperService.sleeperUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sleeperService.sleeperTeamDetails && ctx.sleeperService.sleeperTeamDetails.length > 0);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]], styles: [".community-box[_ngcontent-%COMP%] {\r\n  border: 1px solid grey;\r\n  min-width: 350px;\r\n  min-height: 500px;\r\n}\r\n\r\n.discord-widget[_ngcontent-%COMP%] {\r\n  padding: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tdW5pdHktYm94IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5kaXNjb3JkLXdpZGdldCB7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "DFf+":
/*!*************************************************!*\
  !*** ./src/app/services/init/config.service.ts ***!
  \*************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _endpoints_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../endpoints.service */ "HruU");


class ConfigService {
    constructor(endpointsService) {
        this.endpointsService = endpointsService;
    }
    applyConfigs() {
        this.endpointsService.assignEndpoints();
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_endpoints_service__WEBPACK_IMPORTED_MODULE_1__["EndpointsService"])); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Ftb9":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/components/player-details/player-details-weekly-stats-line-chart/player-details-weekly-stats-line-chart.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: PlayerDetailsWeeklyStatsLineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDetailsWeeklyStatsLineChartComponent", function() { return PlayerDetailsWeeklyStatsLineChartComponent; });
/* harmony import */ var chartjs_plugin_colorschemes_src_plugins_plugin_colorschemes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes */ "icLC");
/* harmony import */ var chartjs_plugin_colorschemes_src_colorschemes_colorschemes_tableau__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau */ "6QYa");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _base_component_abstract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base-component.abstract */ "W5wg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/player.service */ "QIP1");







class PlayerDetailsWeeklyStatsLineChartComponent extends _base_component_abstract__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"] {
    constructor(playerService) {
        super();
        this.playerService = playerService;
        this.totalPoints = 0;
        this.totalProj = 0;
        /** line chart data*/
        this.lineChartData = [];
        /** line chart labels*/
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
                intersect: false,
                mode: 'index',
                position: 'nearest',
            },
            scales: {
                xAxes: [{
                        display: true,
                        gridLines: {
                            display: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Week',
                            fontColor: '#d3d3d3'
                        }
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        display: true,
                        gridLines: {
                            display: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Fantasy Points',
                            fontColor: '#d3d3d3'
                        }
                    }],
            },
            plugins: {
                colorschemes: {
                    scheme: chartjs_plugin_colorschemes_src_colorschemes_colorschemes_tableau__WEBPACK_IMPORTED_MODULE_1__["Classic10"],
                    override: true
                }
            }
        };
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        this.lineChartPlugins = [];
    }
    ngOnInit() {
        this.generateDataSets();
        this.addSubscriptions(this.playerService.$currentPlayerValuesLoaded.subscribe(() => {
            this.generateDataSets();
        }));
    }
    generateDataSets() {
        var _a, _b;
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.totalPoints = 0;
        this.totalProj = 0;
        const stats = [];
        const projections = [];
        for (let i = 1; i < 19; i++) {
            const weekStats = this.playerService.pastSeasonWeeklyStats[i];
            const weekProj = this.playerService.pastSeasonWeeklyProjections[i];
            if (weekStats && weekProj) {
                const stat = ((_a = weekStats[this.selectedPlayer.sleeper_id]) === null || _a === void 0 ? void 0 : _a.pts_half_ppr) || 0;
                const proj = ((_b = weekProj[this.selectedPlayer.sleeper_id]) === null || _b === void 0 ? void 0 : _b.pts_half_ppr) || 0;
                this.totalPoints += stat;
                stats.push(stat);
                this.totalProj += proj;
                projections.push(proj);
                this.lineChartLabels.push(this.playerService.getWeekByIndex(i));
            }
        }
        this.lineChartData.push({ label: 'Actual', data: stats.reverse() });
        this.lineChartData.push({ label: 'Projected', data: projections.reverse() });
        this.lineChartLabels.reverse();
        if (this.chart && this.chart.chart) {
            this.chart.chart.data.datasets = this.lineChartData;
            this.chart.chart.data.labels = this.lineChartLabels;
        }
    }
    generatePerformancePercent() {
        const percent = (this.totalPoints / this.totalProj) > 1 ? (this.totalPoints / this.totalProj) - 1 : 1 - (this.totalPoints / this.totalProj);
        return Math.round(percent * 10000) / 100;
    }
}
PlayerDetailsWeeklyStatsLineChartComponent.ɵfac = function PlayerDetailsWeeklyStatsLineChartComponent_Factory(t) { return new (t || PlayerDetailsWeeklyStatsLineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"])); };
PlayerDetailsWeeklyStatsLineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PlayerDetailsWeeklyStatsLineChartComponent, selectors: [["app-player-details-weekly-stats-line-chart"]], viewQuery: function PlayerDetailsWeeklyStatsLineChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, inputs: { selectedPlayer: "selectedPlayer" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 8, consts: [[1, "center-text"], [1, "warning__alert"], [1, "margin-top-50", 2, "display", "block"], ["baseChart", "", "width", "600", "height", "400", 3, "datasets", "labels", "options", "legend", "chartType", "plugins"]], template: function PlayerDetailsWeeklyStatsLineChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " This player has the tendency to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " over the past 18 weeks!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "canvas", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.totalPoints / ctx.totalProj >= 1 ? "outperform" : "underperform", " their projections by ", ctx.generatePerformancePercent(), "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5ZXItZGV0YWlscy13ZWVrbHktc3RhdHMtbGluZS1jaGFydC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "HruU":
/*!***********************************************!*\
  !*** ./src/app/services/endpoints.service.ts ***!
  \***********************************************/
/*! exports provided: EndpointsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointsService", function() { return EndpointsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_ktc_api_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/ktc-api-config.service */ "PX4D");
/* harmony import */ var _api_sleeper_sleeper_api_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/sleeper/sleeper-api-config.service */ "epAl");



class EndpointsService {
    constructor(ktcApiConfigService, sleeperApiConfigService) {
        this.ktcApiConfigService = ktcApiConfigService;
        this.sleeperApiConfigService = sleeperApiConfigService;
        this.baseUrl = 'http://localhost:' + ((process.env.PORT + 1).toString() || '3000');
    }
    assignEndpoints() {
        // KTC Database Endpoints
        this.ktcApiConfigService.getPlayerValuesForTodayEndpoint = this.baseUrl + '/v1/player/all/today';
        this.ktcApiConfigService.getHistoricalPlayerValues = this.baseUrl + '/v1/player/sleeper/';
        // Sleeper Endpoints
        this.sleeperApiConfigService.getSleeperUsernameEndpoint = 'https://api.sleeper.app/v1/user/';
        this.sleeperApiConfigService.getSleeperLeagueEndpoint = 'https://api.sleeper.app/v1/league/';
        this.sleeperApiConfigService.getSleeperDraftEndpoint = 'https://api.sleeper.app/v1/draft/';
        this.sleeperApiConfigService.getSleeperStatsEndpoint = 'https://api.sleeper.app/v1/stats/nfl/regular/';
        this.sleeperApiConfigService.getSleeperProjectionsEndpoint = 'https://api.sleeper.app/v1/projections/nfl/regular/';
        this.sleeperApiConfigService.getSleeperNFLStateEndpoint = 'https://api.sleeper.app/v1/state/nfl';
    }
}
EndpointsService.ɵfac = function EndpointsService_Factory(t) { return new (t || EndpointsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_ktc_api_config_service__WEBPACK_IMPORTED_MODULE_1__["KTCApiConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_sleeper_sleeper_api_config_service__WEBPACK_IMPORTED_MODULE_2__["SleeperApiConfigService"])); };
EndpointsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EndpointsService, factory: EndpointsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Iwnn":
/*!******************************************************************!*\
  !*** ./src/app/components/services/player-comparison.service.ts ***!
  \******************************************************************/
/*! exports provided: PlayerComparisonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComparisonService", function() { return PlayerComparisonService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_ktc_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/ktc-api.service */ "BCR2");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sleeper.service */ "ebv/");




class PlayerComparisonService {
    constructor(ktcApiService, sleeperService) {
        this.ktcApiService = ktcApiService;
        this.sleeperService = sleeperService;
        /** selected players to add to table*/
        this.selectedPlayers = [];
        /** group2 selected player for group comparisons */
        this.group2SelectedPlayers = [];
        /** line chart data*/
        this.lineChartData = [];
        /** line chart labels*/
        this.lineChartLabels = [];
        this.isSuperFlex = true;
        /** when a player is added/removed */
        this.$updatePlayer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /** is player mode or group mode */
        this.isGroupMode = false;
    }
    /**
     * handles adding data to list
     * @param player
     * @private
     */
    addNewPlayer(player, isGroup2 = false) {
        var _a;
        if (this.lineChartData[0].data.length == 0) {
            this.lineChartData.splice(0, 1);
        }
        if (!this.isGroupMode) {
            const data = [];
            for (let dataPoint of player) {
                if (this.lineChartLabels.includes((_a = dataPoint.date) === null || _a === void 0 ? void 0 : _a.slice(0, 10))) {
                    const index = this.lineChartLabels.indexOf(dataPoint.date.slice(0, 10));
                    data[index] = this.isSuperFlex ? dataPoint.sf_trade_value : dataPoint.trade_value;
                }
            }
            this.lineChartData.push({ data: data, label: player[0].full_name });
            this.selectedPlayers.push({ name: player[0].full_name, id: player[0].name_id, data: player });
            this.$updatePlayer.next({ name: player[0].full_name, id: player[0].name_id, data: player });
        }
        else {
            this.lineChartData = [];
            if (isGroup2) {
                this.group2SelectedPlayers.push({ name: player[0].full_name, id: player[0].name_id, data: player });
            }
            else {
                this.selectedPlayers.push({ name: player[0].full_name, id: player[0].name_id, data: player });
            }
            this.lineChartData.push({ data: this.calculateGroupValue(this.selectedPlayers), label: `Group 1 (${this.selectedPlayers.length} Players)` });
            this.lineChartData.push({ data: this.calculateGroupValue(this.group2SelectedPlayers), label: `Group 2 (${this.group2SelectedPlayers.length} Players)` });
        }
    }
    /**
     * refreshes table
     */
    refreshTable() {
        this.lineChartData = [];
        if (!this.isGroupMode) {
            for (let player of this.selectedPlayers) {
                const data = [];
                for (let dataPoint of player.data) {
                    if (this.lineChartLabels.includes(dataPoint.date.slice(0, 10))) {
                        const index = this.lineChartLabels.indexOf(dataPoint.date.slice(0, 10));
                        data[index] = this.isSuperFlex ? dataPoint.sf_trade_value : dataPoint.trade_value;
                    }
                }
                // dont update selected player data cause it's the source of truth
                this.lineChartData.push({ data: data, label: player.name });
            }
        }
        else {
            this.lineChartData.push({ data: this.calculateGroupValue(this.selectedPlayers), label: `Group 1 (${this.selectedPlayers.length} Players)` });
            this.lineChartData.push({ data: this.calculateGroupValue(this.group2SelectedPlayers), label: `Group 2 (${this.group2SelectedPlayers.length} Players)` });
        }
        this.$updatePlayer.next();
    }
    /**
     * calculates aggregated player values
     * @param players
     * @private
     */
    calculateGroupValue(players) {
        const data = [];
        for (let player of players) {
            for (let dataPoint of player.data) {
                if (this.lineChartLabels.includes(dataPoint.date.slice(0, 10))) {
                    const index = this.lineChartLabels.indexOf(dataPoint.date.slice(0, 10));
                    if (!data[index]) {
                        data[index] = 0;
                    }
                    data[index] += this.isSuperFlex ? dataPoint.sf_trade_value : dataPoint.trade_value;
                }
            }
        }
        return data;
    }
    /**
     * removed selected player from graph
     * @param player
     */
    onRemove(player, isGroup2 = false) {
        if (this.isGroupMode) {
            if ((this.group2SelectedPlayers.length + this.selectedPlayers.length) > 1) {
                if (isGroup2) {
                    this.group2SelectedPlayers = this.group2SelectedPlayers.filter(p => {
                        return p.id != player.id;
                    });
                }
                else {
                    this.selectedPlayers = this.selectedPlayers.filter(p => {
                        return p.id != player.id;
                    });
                }
                this.refreshTable();
            }
        }
        else {
            if (this.selectedPlayers.length > 1) {
                this.selectedPlayers = this.selectedPlayers.filter(p => {
                    return p.id != player.id;
                });
                this.lineChartData = this.lineChartData.filter(p => {
                    return p.label != player.name;
                });
                this.$updatePlayer.next();
            }
        }
    }
    /**
     * add player to chart, fetches data from db
     * @param player
     */
    addPlayerToCharts(player, isGroup2 = false) {
        this.ktcApiService.getHistoricalPlayerValueById(player.name_id).subscribe((data) => {
            !this.isGroupMode ? this.addNewPlayer(data) : this.addNewPlayer(data, isGroup2);
        });
    }
    /**
     * handles toggle group mode
     */
    toggleGroupMode() {
        if (!this.isGroupMode) {
            if (this.selectedPlayers.length == 0) {
                this.selectedPlayers = this.group2SelectedPlayers.slice();
            }
        }
        this.refreshTable();
    }
}
PlayerComparisonService.ɵfac = function PlayerComparisonService_Factory(t) { return new (t || PlayerComparisonService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_api_ktc_api_service__WEBPACK_IMPORTED_MODULE_2__["KTCApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_3__["SleeperService"])); };
PlayerComparisonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PlayerComparisonService, factory: PlayerComparisonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "L2kU":
/*!*************************************************************!*\
  !*** ./src/app/services/api/sleeper/sleeper-api.service.ts ***!
  \*************************************************************/
/*! exports provided: SleeperApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleeperApiService", function() { return SleeperApiService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _model_SleeperUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/SleeperUser */ "A9Rc");
/* harmony import */ var _model_SleeperLeague__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/SleeperLeague */ "ynWM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _sleeper_api_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sleeper-api-config.service */ "epAl");






class SleeperApiService {
    constructor(http, sleeperApiConfigService) {
        this.http = http;
        this.sleeperApiConfigService = sleeperApiConfigService;
    }
    getSleeperUserInformation(userName) {
        return this.http.get(this.sleeperApiConfigService.getSleeperUsernameEndpoint + userName);
    }
    getSleeperLeaguesByUserID(userId, year) {
        return this.http.get(this.sleeperApiConfigService.getSleeperUsernameEndpoint + userId + '/leagues/nfl/' + year).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((leagues) => {
            let leagueList = [];
            leagues.map(league => leagueList.push(new _model_SleeperUser__WEBPACK_IMPORTED_MODULE_1__["SleeperLeagueData"](league.roster_positions.includes('SUPER_FLEX'), league.name, league.league_id, league.total_rosters, league.roster_positions, league.previous_league_id, league.status, league.metadata, league.settings)));
            return leagueList;
        }));
    }
    getSleeperRostersbyLeagueId(leagueId) {
        return this.http.get(this.sleeperApiConfigService.getSleeperLeagueEndpoint + leagueId + '/rosters').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((rosters) => {
            let rosterList = [];
            rosters.map(roster => rosterList.push(new _model_SleeperLeague__WEBPACK_IMPORTED_MODULE_2__["SleeperRosterData"](roster.roster_id, roster.owner_id, roster.players, new _model_SleeperLeague__WEBPACK_IMPORTED_MODULE_2__["TeamMetrics"](roster.settings))));
            return rosterList;
        }));
    }
    getSleeperLeaguebyLeagueId(leagueId) {
        return this.http.get(this.sleeperApiConfigService.getSleeperLeagueEndpoint + leagueId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((league) => {
            return new _model_SleeperUser__WEBPACK_IMPORTED_MODULE_1__["SleeperLeagueData"](league.roster_positions.includes('SUPER_FLEX'), league.name, league.league_id, league.total_rosters, league.roster_positions, league.previous_league_id, league.status, league.metadata, league.settings);
        }));
    }
    ;
    getSleeperOwnersbyLeagueId(leagueId) {
        return this.http.get(this.sleeperApiConfigService.getSleeperLeagueEndpoint + leagueId + '/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((owners) => {
            let ownerList = [];
            owners.map(owner => ownerList.push(new _model_SleeperLeague__WEBPACK_IMPORTED_MODULE_2__["SleeperOwnerData"](owner.user_id, owner.display_name, owner.metadata.team_name, owner.avatar)));
            return ownerList;
        }));
    }
    getSleeperDraftbyLeagueId(leagueId) {
        return this.http.get(this.sleeperApiConfigService.getSleeperLeagueEndpoint + leagueId + '/drafts').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((drafts) => {
            let draftList = [];
            drafts.map(draft => draftList.push(draft.draft_id));
            return draftList;
        }));
    }
    getSleeperDraftDetailsByDraftId(draftId) {
        return this.http.get(this.sleeperApiConfigService.getSleeperDraftEndpoint + draftId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((draft) => {
            return new _model_SleeperLeague__WEBPACK_IMPORTED_MODULE_2__["SleeperRawDraftOrderData"](draft.draft_id, draft.league_id, draft.status, draft.type, draft.draft_order, draft.slot_to_roster_id, draft.season, draft.settings);
        }));
    }
    getSleeperTradedPicksByDraftId(draftId) {
        return this.http.get(this.sleeperApiConfigService.getSleeperDraftEndpoint + draftId + '/traded_picks').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((picks) => {
            let pickList = [];
            picks.map(pick => pickList.push(new _model_SleeperLeague__WEBPACK_IMPORTED_MODULE_2__["SleeperRawTradePicksData"](pick.owner_id, pick.previous_owner_id, pick.roster_id, pick.round, pick.season)));
            return pickList;
        }));
    }
    getSleeperMatchUpsForWeekByLeagueId(leagueId, weekNumber) {
        return this.http.get(this.sleeperApiConfigService.getSleeperLeagueEndpoint + leagueId + '/matchups/' + weekNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((weekMatchups) => {
            return weekMatchups;
        }));
    }
    getSleeperCompletedDraftsByDraftId(draftId) {
        return this.http.get(this.sleeperApiConfigService.getSleeperDraftEndpoint + draftId + '/picks').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((picks) => {
            const mappedPicks = [];
            picks.map(pick => mappedPicks.push(new _model_SleeperLeague__WEBPACK_IMPORTED_MODULE_2__["SleeperCompletedPickData"](pick)));
            return mappedPicks;
        }));
    }
    getSleeperStatsForYear(year) {
        return this.http.get(this.sleeperApiConfigService.getSleeperStatsEndpoint + year).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((stats) => {
            return stats;
        }));
    }
    getSleeperStateOfNFL() {
        return this.http.get(this.sleeperApiConfigService.getSleeperNFLStateEndpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((season) => {
            return new _model_SleeperLeague__WEBPACK_IMPORTED_MODULE_2__["SleeperStateOfNFL"](season);
        }));
    }
    getSleeperStatsForWeek(year, weekNum) {
        return this.http.get(this.sleeperApiConfigService.getSleeperStatsEndpoint + year + '/' + weekNum).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((stats) => {
            return stats;
        }));
    }
    getSleeperProjectionsForWeek(year, weekNum) {
        return this.http.get(this.sleeperApiConfigService.getSleeperProjectionsEndpoint + year + '/' + weekNum).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((stats) => {
            return stats;
        }));
    }
}
SleeperApiService.ɵfac = function SleeperApiService_Factory(t) { return new (t || SleeperApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_sleeper_api_config_service__WEBPACK_IMPORTED_MODULE_5__["SleeperApiConfigService"])); };
SleeperApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SleeperApiService, factory: SleeperApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Mg9l":
/*!***********************************************************************!*\
  !*** ./src/app/components/player-details/player-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: PlayerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDetailsComponent", function() { return PlayerDetailsComponent; });
/* harmony import */ var _base_component_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component.abstract */ "W5wg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/player.service */ "QIP1");
/* harmony import */ var _services_api_ktc_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/ktc-api.service */ "BCR2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sleeper.service */ "ebv/");
/* harmony import */ var _services_player_comparison_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/player-comparison.service */ "Iwnn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _player_details_weekly_stats_line_chart_player_details_weekly_stats_line_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./player-details-weekly-stats-line-chart/player-details-weekly-stats-line-chart.component */ "Ftb9");
/* harmony import */ var _player_details_weekly_box_scores_table_player_details_weekly_box_scores_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./player-details-weekly-box-scores-table/player-details-weekly-box-scores-table.component */ "yQ9t");













const _c0 = function (a1) { return ["../../../league/team", a1]; };
function PlayerDetailsComponent_div_0_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Owned By");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r2.selectedPlayer.owner));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.selectedPlayer.owner || "None");
} }
function PlayerDetailsComponent_div_0_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.sleeperService.selectedLeague.isSuperflex ? ctx_r3.selectedPlayer.sf_position_rank : ctx_r3.selectedPlayer.position_rank);
} }
function PlayerDetailsComponent_div_0_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.selectedPlayer.sf_position_rank);
} }
function PlayerDetailsComponent_div_0_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.sleeperService.selectedLeague.isSuperflex ? ctx_r5.selectedPlayer.sf_trade_value : ctx_r5.selectedPlayer.trade_value);
} }
function PlayerDetailsComponent_div_0_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.selectedPlayer.sf_trade_value);
} }
function PlayerDetailsComponent_div_0_app_player_details_weekly_stats_line_chart_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-player-details-weekly-stats-line-chart", 35);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedPlayer", ctx_r7.selectedPlayer);
} }
function PlayerDetailsComponent_div_0_app_player_details_weekly_box_scores_table_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-player-details-weekly-box-scores-table", 35);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedPlayer", ctx_r8.selectedPlayer);
} }
const _c1 = function () { return ["../../values"]; };
function PlayerDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Players");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayerDetailsComponent_div_0_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.openPlayerComparison(ctx_r9.selectedPlayer); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " View in Player Comparison");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "img", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function PlayerDetailsComponent_div_0_Template_img_error_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16); return _r1.hidden = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, PlayerDetailsComponent_div_0_div_28_Template, 5, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Position Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, PlayerDetailsComponent_div_0_div_34_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, PlayerDetailsComponent_div_0_div_35_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Last 5 Weeks Average");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Trade Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, PlayerDetailsComponent_div_0_div_56_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, PlayerDetailsComponent_div_0_div_57_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-tab-group", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-tab", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Past 18 Weeks Points Vs. Projections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Below is the past 18 weeks of points and projections based on Sleeper's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "0.5 PPR scoring");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, PlayerDetailsComponent_div_0_app_player_details_weekly_stats_line_chart_67_Template, 1, 1, "app-player-details-weekly-stats-line-chart", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "mat-tab", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Past 18 Box Scores");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Below is the past 18 weeks of stats from Sleeper for the following player. The fantasy scoring is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "0.5 PPR scoring");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, PlayerDetailsComponent_div_0_app_player_details_weekly_box_scores_table_76_Template, 1, 1, "app-player-details-weekly-box-scores-table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.selectedPlayer.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "https://sleepercdn.com/content/nfl/players/thumb/" + ctx_r0.selectedPlayer.sleeper_id + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("hidden", _r1.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.selectedPlayer.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.playerService.getFullTeamNameFromACC(ctx_r0.selectedPlayer.team), " ", ctx_r0.selectedPlayer.position, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.selectedPlayer.age != -1 ? ctx_r0.selectedPlayer.age : "??", " y.o.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.sleeperService.selectedLeague);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.sleeperService.selectedLeague);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.sleeperService.selectedLeague);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.selectedPlayer.experience, " Year", ctx_r0.selectedPlayer.experience == 1 ? "s" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.playerService.playerStatsYear, " Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.playerService.playerStats[ctx_r0.selectedPlayer.sleeper_id] == null ? null : ctx_r0.playerService.playerStats[ctx_r0.selectedPlayer.sleeper_id].pts_half_ppr);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getLast5WeekAverage());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.sleeperService.selectedLeague);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.sleeperService.selectedLeague);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isPlayerStatsGenerated());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isPlayerStatsGenerated());
} }
class PlayerDetailsComponent extends _base_component_abstract__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"] {
    constructor(playerService, ktcApiService, route, sleeperService, router, playerComparisonService) {
        super();
        this.playerService = playerService;
        this.ktcApiService = ktcApiService;
        this.route = route;
        this.sleeperService = sleeperService;
        this.router = router;
        this.playerComparisonService = playerComparisonService;
    }
    ngOnInit() {
        const nameId = this.route.snapshot.paramMap.get('playerNameId');
        this.playersLoaded = (this.playerService.playerValues.length > 0);
        if (this.playersLoaded) {
            this.selectedPlayer = this.playerService.getPlayerByNameId(nameId);
        }
        this.playerService.loadPlayerValuesForToday();
        this.addSubscriptions(this.playerService.$currentPlayerValuesLoaded.subscribe(() => {
            this.playersLoaded = true;
            this.selectedPlayer = this.playerService.getPlayerByNameId(nameId);
        }), this.ktcApiService.getHistoricalPlayerValueById(nameId).subscribe((data) => {
            this.historicalTradeValue = data;
        }));
    }
    getLast5WeekAverage() {
        var _a;
        let last5Weeks = 0;
        for (let i = 1; i < 6; i++) {
            const weekStats = this.playerService.pastSeasonWeeklyStats[i];
            if (weekStats) {
                last5Weeks += ((_a = weekStats[this.selectedPlayer.sleeper_id]) === null || _a === void 0 ? void 0 : _a.pts_half_ppr) || 0;
            }
        }
        return Math.round(last5Weeks / 5 * 100) / 100 || '---';
    }
    isPlayerStatsGenerated() {
        return this.playerService.pastSeasonWeeklyStats[1] &&
            this.playerService.pastSeasonWeeklyStats[2] &&
            this.playerService.pastSeasonWeeklyStats[3] &&
            this.playerService.pastSeasonWeeklyStats[4] &&
            this.playerService.pastSeasonWeeklyStats[5] &&
            this.playerService.pastSeasonWeeklyStats[6] &&
            this.playerService.pastSeasonWeeklyStats[7] &&
            this.playerService.pastSeasonWeeklyStats[8] &&
            this.playerService.pastSeasonWeeklyStats[9] &&
            this.playerService.pastSeasonWeeklyStats[10] &&
            this.playerService.pastSeasonWeeklyStats[11] &&
            this.playerService.pastSeasonWeeklyStats[12] &&
            this.playerService.pastSeasonWeeklyStats[13] &&
            this.playerService.pastSeasonWeeklyStats[14] &&
            this.playerService.pastSeasonWeeklyStats[15] &&
            this.playerService.pastSeasonWeeklyStats[16] &&
            this.playerService.pastSeasonWeeklyStats[17] &&
            this.playerService.pastSeasonWeeklyStats[18] &&
            this.playerService.pastSeasonWeeklyProjections[1] &&
            this.playerService.pastSeasonWeeklyProjections[2] &&
            this.playerService.pastSeasonWeeklyProjections[3] &&
            this.playerService.pastSeasonWeeklyProjections[4] &&
            this.playerService.pastSeasonWeeklyProjections[5] &&
            this.playerService.pastSeasonWeeklyProjections[6] &&
            this.playerService.pastSeasonWeeklyProjections[7] &&
            this.playerService.pastSeasonWeeklyProjections[8] &&
            this.playerService.pastSeasonWeeklyProjections[9] &&
            this.playerService.pastSeasonWeeklyProjections[10] &&
            this.playerService.pastSeasonWeeklyProjections[11] &&
            this.playerService.pastSeasonWeeklyProjections[12] &&
            this.playerService.pastSeasonWeeklyProjections[13] &&
            this.playerService.pastSeasonWeeklyProjections[14] &&
            this.playerService.pastSeasonWeeklyProjections[15] &&
            this.playerService.pastSeasonWeeklyProjections[16] &&
            this.playerService.pastSeasonWeeklyProjections[17] &&
            this.playerService.pastSeasonWeeklyProjections[18];
    }
    openPlayerComparison(selectedPlayer) {
        this.playerComparisonService.addPlayerToCharts(selectedPlayer);
        this.router.navigateByUrl('players/comparison');
    }
}
PlayerDetailsComponent.ɵfac = function PlayerDetailsComponent_Factory(t) { return new (t || PlayerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_ktc_api_service__WEBPACK_IMPORTED_MODULE_3__["KTCApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_5__["SleeperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_player_comparison_service__WEBPACK_IMPORTED_MODULE_6__["PlayerComparisonService"])); };
PlayerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlayerDetailsComponent, selectors: [["app-player-details"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "table-container", 4, "ngIf"], [1, "table-container"], [1, "margin-top-10"], [1, "link--text__no__underline", "mid-bold-text", 2, "padding-right", "3px", 3, "routerLink"], [1, "arrow-icon__nav"], [1, "mid-bold-text"], [1, "link--text__no__underline", "mid-bold-text", "button-right", 3, "click"], [1, "flex-start-container", "margin-top-50"], [1, "flex-item-home", "grid-25"], [1, "profile--pic"], [1, "responsive", 3, "src", "hidden", "error"], ["image", ""], [1, "flex-item-home", "grid-60"], [1, "large-bold-header-text"], [2, "padding-right", "15px"], [1, "icon--break"], [4, "ngIf"], [1, "standings-row"], [1, "standings-col", "vertical-break__right__dark"], [1, "small-text__light", "text__light", "disabled__color"], ["class", "mid-bold-text", 4, "ngIf"], [1, "standings-col"], [1, "flex-item-home", "grid-15"], [1, "button-right", "center-text"], [1, "text__light"], ["class", "large-bold-header-text", 4, "ngIf"], ["mat-align-tabs", "center", 1, "margin-top-25"], ["label", "Past Week Summary"], [1, "mid-bold-text", "margin-top-10", "center-text"], [1, "margin-top-10", "center-text"], [1, "info__alert"], [3, "selectedPlayer", 4, "ngIf"], ["label", "Past Box Scores"], [1, "small-text__light", "disabled__color"], [1, "link--text__no__underline", 2, "padding-left", "10px", 3, "routerLink"], [3, "selectedPlayer"]], template: function PlayerDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PlayerDetailsComponent_div_0_Template, 77, 21, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.playersLoaded && ctx.selectedPlayer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _player_details_weekly_stats_line_chart_player_details_weekly_stats_line_chart_component__WEBPACK_IMPORTED_MODULE_11__["PlayerDetailsWeeklyStatsLineChartComponent"], _player_details_weekly_box_scores_table_player_details_weekly_box_scores_table_component__WEBPACK_IMPORTED_MODULE_12__["PlayerDetailsWeeklyBoxScoresTableComponent"]], styles: [".responsive[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.profile--pic[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  \r\n  \r\n}\r\n\r\n.icon--break[_ngcontent-%COMP%] {\r\n  vertical-align: baseline;\r\n  font-size: 10px;\r\n}\r\n\r\n.standings-row[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%; \r\n  \r\n  border-spacing: 10px; \r\n}\r\n\r\n.standings-col[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXLEVBQUUsV0FBVztFQUN4QixvQ0FBb0M7RUFDcEMsb0JBQW9CLEVBQUUsV0FBVztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJwbGF5ZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3BvbnNpdmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnByb2ZpbGUtLXBpYyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgLyptYXgtd2lkdGg6IDIwMDBweDsqL1xyXG4gIC8qbWF4LWhlaWdodDogMjAwMHB4OyovXHJcbn1cclxuXHJcbi5pY29uLS1icmVhayB7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLnN0YW5kaW5ncy1yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlOyAvKk9wdGlvbmFsKi9cclxuICAvKnRhYmxlLWxheW91dDogZml4ZWQ7ICEqT3B0aW9uYWwqISovXHJcbiAgYm9yZGVyLXNwYWNpbmc6IDEwcHg7IC8qT3B0aW9uYWwqL1xyXG59XHJcblxyXG4uc3RhbmRpbmdzLWNvbCB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "NMd0":
/*!**************************************************!*\
  !*** ./src/app/services/init/startup.service.ts ***!
  \**************************************************/
/*! exports provided: StartupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return StartupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ "DFf+");


class StartupService {
    constructor(configService) {
        this.configService = configService;
    }
    startupApplication() {
        return new Promise(resolve => {
            resolve(this.configService.applyConfigs());
        });
    }
}
StartupService.ɵfac = function StartupService_Factory(t) { return new (t || StartupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"])); };
StartupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StartupService, factory: StartupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PX4D":
/*!********************************************************!*\
  !*** ./src/app/services/api/ktc-api-config.service.ts ***!
  \********************************************************/
/*! exports provided: KTCApiConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTCApiConfigService", function() { return KTCApiConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class KTCApiConfigService {
    constructor() {
        // tslint:disable-next-line:variable-name
        this._getPlayerValuesForTodayEndpoint = '';
        this._getHistoricalPlayerValues = '';
    }
    get getPlayerValuesForTodayEndpoint() {
        return this._getPlayerValuesForTodayEndpoint;
    }
    set getPlayerValuesForTodayEndpoint(value) {
        this._getPlayerValuesForTodayEndpoint = value;
    }
    get getHistoricalPlayerValues() {
        return this._getHistoricalPlayerValues;
    }
    set getHistoricalPlayerValues(value) {
        this._getHistoricalPlayerValues = value;
    }
}
KTCApiConfigService.ɵfac = function KTCApiConfigService_Factory(t) { return new (t || KTCApiConfigService)(); };
KTCApiConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KTCApiConfigService, factory: KTCApiConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QIP1":
/*!********************************************!*\
  !*** ./src/app/services/player.service.ts ***!
  \********************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_ktc_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/ktc-api.service */ "BCR2");
/* harmony import */ var _api_sleeper_sleeper_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/sleeper/sleeper-api.service */ "L2kU");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");






class PlayerService {
    constructor(ktcApiService, sleeperApiService, spinner) {
        this.ktcApiService = ktcApiService;
        this.sleeperApiService = sleeperApiService;
        this.spinner = spinner;
        this.playerValues = [];
        this.playerStats = {};
        this.pastSeasonWeeklyStats = {};
        this.pastSeasonWeeklyProjections = {};
        this.teamAccToFullName = {
            'CAR': 'Carolina Panthers',
            'NOS': 'New Orleans Saints',
            'TBB': 'Tampa Bay Buccaneers',
            'ATL': 'Atlanta Falcons',
            'LAR': 'Los Angeles Rams',
            'SEA': 'Seattle Seahawks',
            'SFO': 'San Francisco 49ers',
            'ARI': 'Arizona Cardinals',
            'DAL': 'Dallas Cowboys',
            'NYG': 'New York Giants',
            'PHI': 'Philadelphia Eagles',
            'WAS': 'Washington Football Team',
            'GBP': 'Green Bay Packers',
            'MIN': 'Minnesota Vikings',
            'DET': 'Detroit Lions',
            'CHI': 'Chicago Bears',
            'KCC': 'Kansas City Chiefs',
            'LVR': 'Las Vegas Raiders',
            'LAC': 'Los Angeles Chargers',
            'DEN': 'Denver Broncos',
            'HOU': 'Houston Texans',
            'TEN': 'Tennessee Titans',
            'IND': 'Indianapolis Colts',
            'JAC': 'Jacksonville Jaguars',
            'CLE': 'Cleveland Browns',
            'PIT': 'Pittsburgh Steelers',
            'BAL': 'Baltimore Ravens',
            'CIN': 'Cincinnati Bengals',
            'BUF': 'Buffalo Bills',
            'MIA': 'Miami Dolphins',
            'NYJ': 'New York Jets',
            'NEP': 'New England Patriots',
            'FA': 'Free Agent'
        };
        this.playerStatsYear = '';
        this.$currentPlayerValuesLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    /**
     * loads all player data upon entering site
     */
    loadPlayerValuesForToday() {
        this.spinner.show();
        this.ktcApiService.getPlayerValuesForToday().subscribe((response) => {
            this.playerValues = response;
            this.$loadPlayerStatsForSeason().subscribe((response) => {
                this.playerStats = response;
                this.spinner.hide();
                this.$currentPlayerValuesLoaded.next();
            });
        });
    }
    /**
     * load player stats and projection for season
     * @private
     */
    $loadPlayerStatsForSeason() {
        if (this.playerStatsYear !== '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.playerStats);
        }
        return this.sleeperApiService.getSleeperStateOfNFL().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((season) => {
            this.stateOfNFL = season;
            this.playerStatsYear = this.stateOfNFL.seasonType == 'off' || this.stateOfNFL.seasonType == 'pre' ? this.stateOfNFL.previousSeason : this.stateOfNFL.season;
            const observe = [];
            observe.push(this.sleeperApiService.getSleeperStatsForYear(this.playerStatsYear).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((response) => {
                this.playerStats = response;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.playerStats);
            })));
            let currentWeekInd = this.stateOfNFL.week;
            let currentYearInd = Number(this.stateOfNFL.season);
            for (let weekNum = 1; weekNum < 19; weekNum++) {
                if (currentWeekInd === 0) {
                    currentYearInd = currentYearInd - 1;
                    currentWeekInd = currentYearInd < 2021 ? 17 : 18;
                }
                observe.push(this.sleeperApiService.getSleeperStatsForWeek(currentYearInd.toString(), currentWeekInd).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((weeklyStats) => {
                    this.pastSeasonWeeklyStats[weekNum] = weeklyStats;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(weeklyStats);
                })));
                observe.push(this.sleeperApiService.getSleeperProjectionsForWeek(currentYearInd.toString(), currentWeekInd).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((weeklyStats) => {
                    this.pastSeasonWeeklyProjections[weekNum] = weeklyStats;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(weeklyStats);
                })));
                currentWeekInd--;
            }
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(observe).subscribe(() => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.pastSeasonWeeklyStats);
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.pastSeasonWeeklyStats);
        }));
    }
    /**
     * assign players to fantasy teams
     * @param team
     */
    generateRoster(team) {
        var _a;
        let roster = [];
        if (!team.roster.players)
            return [];
        for (const sleeperId of (_a = team.roster) === null || _a === void 0 ? void 0 : _a.players) {
            for (const player of this.playerValues) {
                if (sleeperId === player.sleeper_id) {
                    player.owner = team.owner.ownerName;
                    roster.push(player);
                    break;
                }
            }
        }
        return roster;
    }
    /**
     * get player based on sleeper id
     * @param id
     */
    getPlayerBySleeperId(id) {
        for (const player of this.playerValues) {
            if (id === player.sleeper_id) {
                return player;
            }
        }
        return null;
    }
    /**
     * reset players owners when changing leagues
     */
    resetOwners() {
        for (const player of this.playerValues) {
            player.owner = '';
        }
    }
    /**
     * get full team name from acc
     * @param acc
     */
    getFullTeamNameFromACC(acc) {
        return this.teamAccToFullName[acc];
    }
    /**
     * returns players current value based name id
     * @param id
     */
    getPlayerByNameId(id) {
        for (const player of this.playerValues) {
            if (id === player.name_id) {
                return player;
            }
        }
        return null;
    }
    /**
     * get week lable for table
     * @param index
     */
    getWeekByIndex(index) {
        index--;
        if (this.stateOfNFL) {
            let weekNum = this.stateOfNFL.week - index;
            let year = Number(this.stateOfNFL.season);
            if (weekNum < 1) {
                year--;
                weekNum = (year < 2021 ? 17 : 18) - Math.abs(weekNum);
                if (weekNum < 1) {
                    year--;
                    weekNum = (year < 2021 ? 17 : 18) - Math.abs(weekNum);
                }
            }
            return 'Week ' + weekNum + ' ' + year;
        }
    }
}
PlayerService.ɵfac = function PlayerService_Factory(t) { return new (t || PlayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_ktc_api_service__WEBPACK_IMPORTED_MODULE_3__["KTCApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_sleeper_sleeper_api_service__WEBPACK_IMPORTED_MODULE_4__["SleeperApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"])); };
PlayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PlayerService, factory: PlayerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QOKW":
/*!*******************************************************************!*\
  !*** ./src/app/components/services/playoff-calculator.service.ts ***!
  \*******************************************************************/
/*! exports provided: PlayoffCalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayoffCalculatorService", function() { return PlayoffCalculatorService; });
/* harmony import */ var _model_playoffCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/playoffCalculator */ "bIPV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PlayoffCalculatorService {
    constructor() {
        this.divisions = [];
    }
    generateDivisions(league, teams) {
        if (this.divisions.length === 0) {
            if (league.divisions) {
                for (let i = 0; i < league.divisions; i++) {
                    const divisionTeams = [];
                    for (let team of teams) {
                        if (team.roster.teamMetrics.division === i + 1) {
                            divisionTeams.push(team);
                        }
                    }
                    divisionTeams.sort((a, b) => {
                        return a.roster.teamMetrics.rank - b.roster.teamMetrics.rank;
                    });
                    this.divisions.push(new _model_playoffCalculator__WEBPACK_IMPORTED_MODULE_0__["Division"](i + 1, divisionTeams));
                }
            }
            else {
                const allTeams = teams.slice();
                allTeams.sort((a, b) => {
                    if (a.roster.teamMetrics.rank != 0) {
                        return a.roster.teamMetrics.rank - b.roster.teamMetrics.rank;
                    }
                    else {
                        return b.roster.teamMetrics.wins - a.roster.teamMetrics.wins || b.roster.teamMetrics.fpts - a.roster.teamMetrics.fpts;
                    }
                });
                if (allTeams[0].roster.teamMetrics.rank == 0) {
                    for (let i = 0; i < allTeams.length; i++) {
                        allTeams[i].roster.teamMetrics.rank = i + 1;
                    }
                }
                this.divisions.push(new _model_playoffCalculator__WEBPACK_IMPORTED_MODULE_0__["Division"](1, allTeams));
                league.divisions = 1;
            }
        }
    }
    reset() {
        this.divisions = [];
    }
}
PlayoffCalculatorService.ɵfac = function PlayoffCalculatorService_Factory(t) { return new (t || PlayoffCalculatorService)(); };
PlayoffCalculatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PlayoffCalculatorService, factory: PlayoffCalculatorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RVpf":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/power-rankings/power-rankings-table/power-rankings-table.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: detailExpand, PowerRankingsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detailExpand", function() { return detailExpand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerRankingsTableComponent", function() { return PowerRankingsTableComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/sleeper.service */ "ebv/");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












function PowerRankingsTableComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PowerRankingsTableComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r22.team.owner.teamName, " ");
} }
function PowerRankingsTableComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PowerRankingsTableComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r23.team.owner.ownerName, " ");
} }
function PowerRankingsTableComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Overall Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PowerRankingsTableComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r24.overallRank, " ");
} }
function PowerRankingsTableComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Starter Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PowerRankingsTableComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r25.starterRank, " ");
} }
function PowerRankingsTableComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "QB Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PowerRankingsTableComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r26.roster[0].rank, " ");
} }
function PowerRankingsTableComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "RB Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PowerRankingsTableComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r27.roster[1] == null ? null : element_r27.roster[1].rank, " ");
} }
function PowerRankingsTableComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "WR Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PowerRankingsTableComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r28.roster[2] == null ? null : element_r28.roster[2].rank, " ");
} }
function PowerRankingsTableComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "TE Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PowerRankingsTableComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r29.roster[3] == null ? null : element_r29.roster[3].rank, " ");
} }
function PowerRankingsTableComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Draft Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PowerRankingsTableComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r30.picks.rank, " ");
} }
function PowerRankingsTableComponent_td_34_div_36_div_12_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "grade");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inline", true);
} }
const _c0 = function (a0, a1) { return { "success__alert": a0, "urgent__alert": a1 }; };
function PowerRankingsTableComponent_td_34_div_36_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PowerRankingsTableComponent_td_34_div_36_div_12_mat_icon_2_Template, 2, 1, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r36 = ctx.$implicit;
    const element_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.isStarter(element_r31, player_r36));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", player_r36.full_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](4, _c0, (ctx_r35.isSuperFlex ? player_r36.sf_trade_value : player_r36.trade_value) > 6000, (ctx_r35.isSuperFlex ? player_r36.sf_trade_value : player_r36.trade_value) < 2000));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r35.isSuperFlex ? player_r36.sf_trade_value : player_r36.trade_value);
} }
const _c1 = function (a0, a1) { return { "success__alert": a0, "warning__alert": a1 }; };
function PowerRankingsTableComponent_td_34_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Rank: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "hr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, PowerRankingsTableComponent_td_34_div_36_div_12_Template, 7, 7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const positionGroup_r34 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", positionGroup_r34.position, " Value: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r32.isSuperFlex ? positionGroup_r34.sfTradeValue : positionGroup_r34.tradeValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c1, positionGroup_r34.rank < ctx_r32.alertThreshold, positionGroup_r34.rank > ctx_r32.alertThreshold * 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](positionGroup_r34.rank);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", positionGroup_r34.players);
} }
function PowerRankingsTableComponent_td_34_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r39 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", player_r39.full_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c0, (ctx_r33.isSuperFlex ? player_r39.sf_trade_value : player_r39.trade_value) > 6000, (ctx_r33.isSuperFlex ? player_r39.sf_trade_value : player_r39.trade_value) < 2000));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r33.isSuperFlex ? player_r39.sf_trade_value : player_r39.trade_value);
} }
const _c2 = function (a1) { return ["../team", a1]; };
function PowerRankingsTableComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Owner: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Overall Value: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " (Rank: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Starter Value: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " (Rank: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, PowerRankingsTableComponent_td_34_div_36_Template, 13, 8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Upcoming Picks: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " (Rank: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "hr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, PowerRankingsTableComponent_td_34_div_50_Template, 5, 6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", ctx_r18.columnsToDisplay.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@detailExpand", ctx_r18.checkExpanded(element_r31) ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c2, element_r31.team.owner.ownerName));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r31.team.owner.teamName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r31.team.owner.ownerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.isSuperFlex ? element_r31.sfTradeValueOverall : element_r31.tradeValueOverall);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](18, _c1, element_r31.overallRank < ctx_r18.alertThreshold, element_r31.overallRank > ctx_r18.alertThreshold * 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r31.overallRank);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.isSuperFlex ? element_r31.sfTradeValueStarter : element_r31.tradeValueStarter);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](21, _c1, element_r31.starterRank < ctx_r18.alertThreshold, element_r31.starterRank > ctx_r18.alertThreshold * 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r31.starterRank);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", element_r31.roster);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.isSuperFlex ? element_r31.picks.sfTradeValue : element_r31.picks.tradeValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](24, _c1, element_r31.picks.rank < ctx_r18.alertThreshold, element_r31.picks.rank > ctx_r18.alertThreshold * 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r31.picks.rank);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", element_r31.picks.players);
} }
function PowerRankingsTableComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 36);
} }
const _c3 = function (a0) { return { "accent__color__background": a0 }; };
function PowerRankingsTableComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PowerRankingsTableComponent_tr_36_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42); const element_r40 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r41.pushPopElement(element_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("power-ranking-expanded-row", ctx_r20.checkExpanded(element_r40));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c3, ctx_r20.sleeperService.sleeperUser.userData.username === element_r40.team.owner.ownerName));
} }
function PowerRankingsTableComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 38);
} }
const _c4 = function () { return ["expandedDetail"]; };
const detailExpand = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('detailExpand', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded <=> void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
]);
class PowerRankingsTableComponent {
    constructor(sleeperService) {
        this.sleeperService = sleeperService;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.columnsToDisplay = ['team', 'owner', 'overallRank', 'starterRank', 'qbRank', 'rbRank', 'wrRank', 'teRank', 'draftRank'];
        this.expandedElement = [];
    }
    ngOnInit() {
        this.alertThreshold = this.powerRankings.length / 3;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.powerRankings);
        this.dataSource.sortingDataAccessor = (item, property) => {
            if (property === 'team') {
                return item.team.owner.teamName;
            }
            else if (property === 'owner') {
                return item.team.owner.ownerName;
            }
            else if (property === 'qbRank') {
                return item.roster[0].rank;
            }
            else if (property === 'rbRank') {
                return item.roster[1].rank;
            }
            else if (property === 'wrRank') {
                return item.roster[2].rank;
            }
            else if (property === 'teRank') {
                return item.roster[3].rank;
            }
            else if (property === 'draftRank') {
                return item.picks.rank;
            }
            else {
                return item[property];
            }
        };
        this.dataSource.sort = this.sort;
    }
    checkExpanded(element) {
        let flag = false;
        this.expandedElement.forEach(e => {
            if (e === element) {
                flag = true;
            }
        });
        return flag;
    }
    pushPopElement(element) {
        const index = this.expandedElement.indexOf(element);
        if (index === -1) {
            this.expandedElement.push(element);
        }
        else {
            this.expandedElement.splice(index, 1);
        }
    }
    expandCollapseAll() {
        this.dataSource.data = this.powerRankings;
        if (this.expandedElement.length != this.powerRankings.length) {
            this.expandedElement = this.powerRankings;
        }
        else {
            this.expandedElement = [];
        }
    }
    isStarter(team, player) {
        return team.starters.includes(player);
    }
}
PowerRankingsTableComponent.ɵfac = function PowerRankingsTableComponent_Factory(t) { return new (t || PowerRankingsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_4__["SleeperService"])); };
PowerRankingsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PowerRankingsTableComponent, selectors: [["app-power-rankings-table"]], viewQuery: function PowerRankingsTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { powerRankings: "powerRankings", isSuperFlex: "isSuperFlex" }, decls: 38, vars: 6, consts: [[1, "power-ranking-container"], [1, "margin-bot-20"], [1, "container_spacer"], ["mat-raised-button", "", "color", "accent", 1, "button-right", 3, "click"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "matSortActive", "overallRank", "matSortDirection", "asc", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "team"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "owner"], ["matColumnDef", "overallRank"], ["matColumnDef", "starterRank"], ["matColumnDef", "qbRank"], ["matColumnDef", "rbRank"], ["matColumnDef", "wrRank"], ["matColumnDef", "teRank"], ["matColumnDef", "draftRank"], ["matColumnDef", "expandedDetail"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "power-ranking-element-row", 3, "power-ranking-expanded-row", "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "power-ranking-detail-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "power-ranking-element-detail", "container__no-padding"], [1, "grid-20"], [1, "text__light"], [1, "mid-bold-text", "link--text__no__underline", 3, "routerLink"], [1, "small-text__light"], [1, "mid-bold-text"], [3, "ngClass"], ["class", "grid-16", 4, "ngFor", "ngForOf"], [1, "grid-16"], [1, "dark"], [4, "ngFor", "ngForOf"], [1, "starter-icon"], [3, "inline", 4, "ngIf"], [3, "inline"], ["mat-header-row", ""], ["mat-row", "", 1, "power-ranking-element-row", 3, "ngClass", "click"], ["mat-row", "", 1, "power-ranking-detail-row"]], template: function PowerRankingsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PowerRankingsTableComponent_Template_button_click_3_listener() { return ctx.expandCollapseAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PowerRankingsTableComponent_th_7_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, PowerRankingsTableComponent_td_8_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](9, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PowerRankingsTableComponent_th_10_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, PowerRankingsTableComponent_td_11_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, PowerRankingsTableComponent_th_13_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, PowerRankingsTableComponent_td_14_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, PowerRankingsTableComponent_th_16_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, PowerRankingsTableComponent_td_17_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](18, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, PowerRankingsTableComponent_th_19_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, PowerRankingsTableComponent_td_20_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](21, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, PowerRankingsTableComponent_th_22_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, PowerRankingsTableComponent_td_23_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](24, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, PowerRankingsTableComponent_th_25_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, PowerRankingsTableComponent_td_26_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](27, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, PowerRankingsTableComponent_th_28_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, PowerRankingsTableComponent_td_29_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](30, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, PowerRankingsTableComponent_th_31_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, PowerRankingsTableComponent_td_32_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](33, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, PowerRankingsTableComponent_td_34_Template, 51, 27, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, PowerRankingsTableComponent_tr_35_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, PowerRankingsTableComponent_tr_36_Template, 1, 5, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, PowerRankingsTableComponent_tr_37_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.expandedElement.length == ctx.powerRankings.length ? "Collapse" : "Expand", " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c4));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\ntr.power-ranking-detail-row[_ngcontent-%COMP%] {\r\n  height: 0;\r\n}\r\n\r\ntr.power-ranking-element-row[_ngcontent-%COMP%]:not(.power-ranking-expanded-row):hover {\r\n  background: #c33163;\r\n}\r\n\r\ntr.power-ranking-element-row[_ngcontent-%COMP%]:not(.power-ranking-expanded-row):active {\r\n  background: #c33163;\r\n}\r\n\r\n.power-ranking-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.power-ranking-element-detail[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.power-ranking-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 8px 24px 24px;\r\n  min-width: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvd2VyLXJhbmtpbmdzLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InBvd2VyLXJhbmtpbmdzLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRyLnBvd2VyLXJhbmtpbmctZGV0YWlsLXJvdyB7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG50ci5wb3dlci1yYW5raW5nLWVsZW1lbnQtcm93Om5vdCgucG93ZXItcmFua2luZy1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjYzMzMTYzO1xyXG59XHJcblxyXG50ci5wb3dlci1yYW5raW5nLWVsZW1lbnQtcm93Om5vdCgucG93ZXItcmFua2luZy1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2MzMzE2MztcclxufVxyXG5cclxuLnBvd2VyLXJhbmtpbmctZWxlbWVudC1yb3cgdGQge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5wb3dlci1yYW5raW5nLWVsZW1lbnQtZGV0YWlsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5wb3dlci1yYW5raW5nLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDhweCAyNHB4IDI0cHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG4iXX0= */"], data: { animation: [detailExpand] } });


/***/ }),

/***/ "RfqT":
/*!***********************************************************************!*\
  !*** ./src/app/components/draft/draft-table/draft-table.component.ts ***!
  \***********************************************************************/
/*! exports provided: DraftTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftTableComponent", function() { return DraftTableComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_mock_draft_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mock-draft.service */ "1EFA");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/sleeper.service */ "ebv/");
/* harmony import */ var _services_power_rankings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/power-rankings.service */ "UNAG");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
















function DraftTableComponent_mat_header_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Pick");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DraftTableComponent_mat_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r12.pickdisplay);
} }
function DraftTableComponent_mat_header_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DraftTableComponent_mat_cell_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r13.pickTeam);
} }
function DraftTableComponent_mat_header_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DraftTableComponent_mat_cell_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r14.pickOwner);
} }
function DraftTableComponent_mat_header_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Pick Trade Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DraftTableComponent_mat_cell_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r15.pickOwner);
} }
function DraftTableComponent_mat_header_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Projected Pick");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DraftTableComponent_mat_cell_26_mat_form_field_1_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", player_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", player_r21.position, " ", player_r21.full_name, " - ", player_r21.sf_trade_value, "");
} }
function DraftTableComponent_mat_cell_26_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DraftTableComponent_mat_cell_26_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const element_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r22.selectedPlayers[element_r16.pick - 1] = $event); })("selectionChange", function DraftTableComponent_mat_cell_26_mat_form_field_1_Template_mat_select_selectionChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const element_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.updateDraftSelections(element_r16.pick); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DraftTableComponent_mat_cell_26_mat_form_field_1_mat_option_2_Template, 2, 4, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r17.selectedPlayers[element_r16.pick - 1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r17.selectedPlayers.slice(element_r16.pick - 1));
} }
function DraftTableComponent_mat_cell_26_mat_form_field_2_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r28.isPlayerAlreadySelected(player_r29))("value", player_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", player_r29.position, " ", player_r29.full_name, " - ", player_r29.sf_trade_value, "");
} }
function DraftTableComponent_mat_cell_26_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DraftTableComponent_mat_cell_26_mat_form_field_2_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const element_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r30.selectedPlayers[element_r16.pick - 1] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DraftTableComponent_mat_cell_26_mat_form_field_2_mat_option_2_Template, 2, 5, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r18.selectedPlayers[element_r16.pick - 1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r18.mockDraftService.selectablePlayers);
} }
function DraftTableComponent_mat_cell_26_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No more rookies in system ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DraftTableComponent_mat_cell_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DraftTableComponent_mat_cell_26_mat_form_field_1_Template, 3, 2, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DraftTableComponent_mat_cell_26_mat_form_field_2_Template, 3, 2, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DraftTableComponent_mat_cell_26_span_3_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", element_r16.pick <= ctx_r9.selectedPlayers.length && ctx_r9.mockDraftConfig == "player");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", element_r16.pick <= ctx_r9.mockDraftService.selectablePlayers.length && ctx_r9.mockDraftConfig == "custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", element_r16.pick > ctx_r9.mockDraftService.selectablePlayers.length);
} }
function DraftTableComponent_mat_header_row_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-header-row");
} }
const _c0 = function (a0) { return { "accent__color__background": a0 }; };
function DraftTableComponent_mat_row_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-row", 27);
} if (rf & 2) {
    const row_r34 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, ctx_r11.sleeperService.sleeperUser.userData.username === row_r34.pickOwner));
} }
const _c1 = function (a0, a1, a2) { return [a0, a1, a2]; };
class DraftTableComponent {
    constructor(mockDraftService, sleeperService, powerRankingService) {
        this.mockDraftService = mockDraftService;
        this.sleeperService = sleeperService;
        this.powerRankingService = powerRankingService;
        this.displayedColumns = [];
        this.selectedPlayers = [];
        this.pageLength = 12;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.mockDraftConfig = 'player';
        this.displayedColumns = ['pickNumber', 'team', 'owner', 'projectedPlayer'];
        this.selectedPlayers = JSON.parse(JSON.stringify(this.mockDraftService.selectablePlayers));
        this.pageLength = this.sleeperService.selectedLeague.totalRosters;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.mockDraftService.teamPicks);
        this.dataSource.paginator = this.paginator;
    }
    /**
     * updates draft dropdown to show for player value mode
     * @param pick
     */
    updateDraftSelections(pick) {
        const staticPicks = this.selectedPlayers.slice(0, pick);
        let newDropDown = [];
        for (let player of this.mockDraftService.selectablePlayers) {
            if (!staticPicks.some(picked => picked.sleeper_id === player.sleeper_id))
                newDropDown.push(player);
        }
        this.selectedPlayers = staticPicks.concat(newDropDown);
    }
    /**
     * disable player in custom mode dropdown if already selected
     * @param player
     */
    isPlayerAlreadySelected(player) {
        return this.selectedPlayers.some(picked => picked.name_id === player.name_id);
    }
    /**
     * change mock draft type
     */
    changeMockDraftType() {
        if (this.mockDraftConfig !== 'custom') {
            this.selectedPlayers = JSON.parse(JSON.stringify(this.mockDraftService.selectablePlayers));
        }
        else {
            this.selectedPlayers = [];
        }
    }
    /**
     * resets mock draft values
     */
    resetMockDraft() {
        this.changeMockDraftType();
    }
}
DraftTableComponent.ɵfac = function DraftTableComponent_Factory(t) { return new (t || DraftTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_mock_draft_service__WEBPACK_IMPORTED_MODULE_3__["MockDraftService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_4__["SleeperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_power_rankings_service__WEBPACK_IMPORTED_MODULE_5__["PowerRankingsService"])); };
DraftTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DraftTableComponent, selectors: [["app-draft-table"]], viewQuery: function DraftTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 30, vars: 9, consts: [[1, "table-container"], [1, "button-left", 2, "overflow", "auto", 3, "ngModel", "ngModelChange", "change"], ["value", "player"], ["value", "custom"], [1, "container_spacer"], ["mat-raised-button", "", "color", "accent", 1, "button-right", 3, "click"], [1, "margin-top-10", "mat-elevation-z8"], [3, "dataSource"], ["matColumnDef", "pickNumber"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "team"], ["matColumnDef", "owner"], ["matColumnDef", "pickValue"], ["matColumnDef", "projectedPlayer"], [4, "matHeaderRowDef"], [3, "ngClass", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["appearance", "standard", "class", "mat-dropdown-wide-300", 4, "ngIf"], [4, "ngIf"], ["appearance", "standard", 1, "mat-dropdown-wide-300"], ["placeholder", "Select Player", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["drlr", "", "placeholder", "Select Player", 3, "ngModel", "ngModelChange"], [3, "disabled", "value", 4, "ngFor", "ngForOf"], [3, "disabled", "value"], [3, "ngClass"]], template: function DraftTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-button-toggle-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DraftTableComponent_Template_mat_button_toggle_group_ngModelChange_2_listener($event) { return ctx.mockDraftConfig = $event; })("change", function DraftTableComponent_Template_mat_button_toggle_group_change_2_listener() { return ctx.changeMockDraftType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Player Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DraftTableComponent_Template_button_click_8_listener() { return ctx.resetMockDraft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, DraftTableComponent_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, DraftTableComponent_mat_cell_14_Template, 2, 1, "mat-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](15, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, DraftTableComponent_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, DraftTableComponent_mat_cell_17_Template, 2, 1, "mat-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, DraftTableComponent_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, DraftTableComponent_mat_cell_20_Template, 2, 1, "mat-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](21, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, DraftTableComponent_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, DraftTableComponent_mat_cell_23_Template, 2, 1, "mat-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](24, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, DraftTableComponent_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, DraftTableComponent_mat_cell_26_Template, 4, 3, "mat-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, DraftTableComponent_mat_header_row_27_Template, 1, 0, "mat-header-row", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, DraftTableComponent_mat_row_28_Template, 1, 3, "mat-row", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "mat-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.mockDraftConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](5, _c1, ctx.pageLength, 2 * ctx.pageLength, 4 * ctx.pageLength));
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"]], styles: [".actions-bar[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYWZ0LXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6ImRyYWZ0LXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9ucy1iYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "ScK4":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/playoff-calculator/schedule-comparison/schedule-comparison.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ScheduleComparisonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComparisonComponent", function() { return ScheduleComparisonComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/sleeper.service */ "ebv/");
/* harmony import */ var _services_matchup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/matchup.service */ "pxwm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");







function ScheduleComparisonComponent_div_0_mat_header_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Teams");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ScheduleComparisonComponent_div_0_mat_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.matchupService.getTeamName(element_r6.rosterId, ctx_r2.sleeperService.sleeperTeamDetails));
} }
function ScheduleComparisonComponent_div_0_ng_container_5_mat_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.matchupService.getTeamName(col_r7, ctx_r8.sleeperService.sleeperTeamDetails));
} }
const _c0 = function (a0) { return { "accent__color__background": a0 }; };
function ScheduleComparisonComponent_div_0_ng_container_5_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const col_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r9.areSameTeam(col_r7, element_r11.rosterId)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.getRecord(element_r11, col_r7));
} }
function ScheduleComparisonComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ScheduleComparisonComponent_div_0_ng_container_5_mat_header_cell_2_Template, 2, 1, "mat-header-cell", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ScheduleComparisonComponent_div_0_ng_container_5_mat_cell_3_Template, 2, 4, "mat-cell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matColumnDef", col_r7);
} }
function ScheduleComparisonComponent_div_0_mat_header_row_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function ScheduleComparisonComponent_div_0_mat_row_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
} }
function ScheduleComparisonComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ScheduleComparisonComponent_div_0_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ScheduleComparisonComponent_div_0_mat_cell_4_Template, 2, 1, "mat-cell", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ScheduleComparisonComponent_div_0_ng_container_5_Template, 4, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ScheduleComparisonComponent_div_0_mat_header_row_6_Template, 1, 0, "mat-header-row", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ScheduleComparisonComponent_div_0_mat_row_7_Template, 1, 0, "mat-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.displayColumns.slice(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayColumns);
} }
class ScheduleComparisonComponent {
    constructor(sleeperService, matchupService) {
        this.sleeperService = sleeperService;
        this.matchupService = matchupService;
        this.displayColumns = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.displayColumns = this.generateCols();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.matchupService.scheduleComparison);
    }
    /**
     * generate columns
     * @private
     */
    generateCols() {
        const rosterIds = ['team'];
        for (let team of this.sleeperService.sleeperTeamDetails) {
            rosterIds.push(team.roster.rosterId.toString());
        }
        return rosterIds;
    }
    /**
     * return record string to display
     * @param element
     * @param col
     */
    getRecord(element, col) {
        return `${element.record[col][0]}-${element.record[col][1]}` + (element.record[col][2] > 0 ? `-${element.record[col][2]}` : '');
    }
    /**
     * is same team
     * this method is to compare string to num
     * @param col
     * @param rosterId
     */
    areSameTeam(col, rosterId) {
        return Number(col) === rosterId;
    }
}
ScheduleComparisonComponent.ɵfac = function ScheduleComparisonComponent_Factory(t) { return new (t || ScheduleComparisonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_2__["SleeperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_matchup_service__WEBPACK_IMPORTED_MODULE_3__["MatchupService"])); };
ScheduleComparisonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScheduleComparisonComponent, selectors: [["app-schedule-comparison"]], decls: 1, vars: 1, consts: [["class", "margin-top-10 table-container", 4, "ngIf"], [1, "margin-top-10", "table-container"], [1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "team"], [4, "matHeaderCellDef"], [4, "matCellDef"], [4, "ngFor", "ngForOf"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["class", "mat-table-center-text", 4, "matHeaderCellDef"], ["class", "mat-table-center-text", 3, "ngClass", 4, "matCellDef"], [1, "mat-table-center-text"], [1, "mat-table-center-text", 3, "ngClass"]], template: function ScheduleComparisonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ScheduleComparisonComponent_div_0_Template, 8, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayColumns.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2hlZHVsZS1jb21wYXJpc29uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "SpCN":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/power-rankings/power-rankings-chart/power-rankings-chart.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: PowerRankingsChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerRankingsChartComponent", function() { return PowerRankingsChartComponent; });
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_power_rankings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/power-rankings.service */ "UNAG");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/sleeper.service */ "ebv/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function PowerRankingsChartComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "canvas", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx_r0.data)("labels", ctx_r0.dataLabels)("options", ctx_r0.lineChartOptions)("legend", ctx_r0.lineChartLegend)("chartType", ctx_r0.lineChartType)("plugins", ctx_r0.lineChartPlugins);
} }
class PowerRankingsChartComponent {
    constructor(powerRankingService, sleeperService) {
        this.powerRankingService = powerRankingService;
        this.sleeperService = sleeperService;
        this.selectedFilter = 'starter';
        this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
                intersect: false,
                mode: 'index'
            },
            title: {
                text: 'Overall Team Value'
            },
            scales: {
                xAxes: [{
                        display: true,
                        stacked: true,
                        gridLines: {
                            display: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Team',
                            fontColor: '#d3d3d3'
                        }
                    }],
                yAxes: [{
                        display: true,
                        stacked: true,
                        gridLines: {
                            display: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontColor: '#d3d3d3'
                        }
                    }]
            },
            legend: {
                position: 'left',
                labels: {
                    fontColor: '#d3d3d3'
                },
                reverse: true,
            },
            plugins: {}
        };
        this.lineChartLegend = true;
        this.lineChartType = 'bar';
        this.lineChartPlugins = [];
        this.data = [];
        this.dataLabels = [];
    }
    ngOnInit() {
        this.dataLabels = [];
        for (let team of this.powerRankingService.powerRankings) {
            this.dataLabels.push(team.team.owner.ownerName);
        }
        this.refreshChart();
    }
    refreshChart() {
        let temp = [];
        for (let team of this.powerRankingService.powerRankings) {
            const index = this.dataLabels.indexOf(team.team.owner.ownerName);
            temp[index] = this.sleeperService.selectedLeague.isSuperflex ? team.roster[0].sfTradeValue : team.roster[0].tradeValue;
            this.data[0] = { data: temp, label: 'QB' };
        }
        temp = [];
        for (let team of this.powerRankingService.powerRankings) {
            const index = this.dataLabels.indexOf(team.team.owner.ownerName);
            temp[index] = this.sleeperService.selectedLeague.isSuperflex ? team.roster[1].sfTradeValue : team.roster[1].tradeValue;
            this.data[1] = { data: temp, label: 'RB' };
        }
        temp = [];
        for (let team of this.powerRankingService.powerRankings) {
            const index = this.dataLabels.indexOf(team.team.owner.ownerName);
            temp[index] = this.sleeperService.selectedLeague.isSuperflex ? team.roster[2].sfTradeValue : team.roster[2].tradeValue;
            this.data[2] = { data: temp, label: 'WR' };
        }
        temp = [];
        for (let team of this.powerRankingService.powerRankings) {
            const index = this.dataLabels.indexOf(team.team.owner.ownerName);
            temp[index] = this.sleeperService.selectedLeague.isSuperflex ? team.roster[3].sfTradeValue : team.roster[3].tradeValue;
            this.data[3] = { data: temp, label: 'TE' };
        }
        temp = [];
        for (let team of this.powerRankingService.powerRankings) {
            const index = this.dataLabels.indexOf(team.team.owner.ownerName);
            temp[index] = this.sleeperService.selectedLeague.isSuperflex ? team.picks.sfTradeValue : team.picks.tradeValue;
            this.data[4] = { data: temp, label: 'Draft Capital' };
        }
    }
}
PowerRankingsChartComponent.ɵfac = function PowerRankingsChartComponent_Factory(t) { return new (t || PowerRankingsChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_power_rankings_service__WEBPACK_IMPORTED_MODULE_2__["PowerRankingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_3__["SleeperService"])); };
PowerRankingsChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PowerRankingsChartComponent, selectors: [["app-power-rankings-chart"]], viewQuery: function PowerRankingsChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_0__["BaseChartDirective"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 2, vars: 1, consts: [[1, "table-container", "margin-top-25"], ["style", "display: block;", 4, "ngIf"], [2, "display", "block"], ["baseChart", "", "width", "600", "height", "400", 3, "datasets", "labels", "options", "legend", "chartType", "plugins"]], template: function PowerRankingsChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PowerRankingsChartComponent_div_1_Template, 2, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng2_charts__WEBPACK_IMPORTED_MODULE_0__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3dlci1yYW5raW5ncy1jaGFydC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'fantasy-app';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-scale-multiple"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "UNAG":
/*!***************************************************************!*\
  !*** ./src/app/components/services/power-rankings.service.ts ***!
  \***************************************************************/
/*! exports provided: PowerRankingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerRankingsService", function() { return PowerRankingsService; });
/* harmony import */ var _model_powerRankings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/powerRankings */ "zSQ3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sleeper.service */ "ebv/");



class PowerRankingsService {
    constructor(sleeperService) {
        this.sleeperService = sleeperService;
        /** team power rankings */
        this.powerRankings = [];
        /** supported position groups to power rank */
        this.positionGroups = ['QB', 'RB', 'WR', 'TE'];
    }
    /**
     * maps players to sleeper id's on rosters
     * @param teams
     * @param players
     */
    mapPowerRankings(teams, players) {
        try {
            if (this.powerRankings.length === 0) {
                teams.map((team) => {
                    var _a;
                    const roster = [];
                    let sfTradeValueTotal = 0;
                    let tradeValueTotal = 0;
                    for (const sleeperId of (_a = team.roster) === null || _a === void 0 ? void 0 : _a.players) {
                        for (const player of players) {
                            if (sleeperId === player.sleeper_id) {
                                roster.push(player);
                                sfTradeValueTotal += player.sf_trade_value;
                                tradeValueTotal += player.trade_value;
                                break;
                            }
                        }
                    }
                    const positionRoster = [];
                    for (const group of this.positionGroups) {
                        let sfTradeValue = 0;
                        let tradeValue = 0;
                        let groupList = [];
                        groupList = roster.filter(player => {
                            if (player.position === group) {
                                sfTradeValue += player.sf_trade_value;
                                tradeValue += player.trade_value;
                                return player;
                            }
                        });
                        positionRoster.push(new _model_powerRankings__WEBPACK_IMPORTED_MODULE_0__["PositionPowerRanking"](group, sfTradeValue, tradeValue, groupList));
                    }
                    const pickValues = players.filter(player => {
                        return player.position === 'PI';
                    });
                    const picks = [];
                    let sfPickTradeValue = 0;
                    let pickTradeValue = 0;
                    team.draftCapital.map(pick => {
                        for (const pickValue of pickValues) {
                            if (pickValue.last_name.includes(pick.round.toString()) && pickValue.first_name === pick.year) {
                                if (pick.pick < 5 && pickValue.last_name.includes('Early')) {
                                    sfPickTradeValue += pickValue.sf_trade_value;
                                    pickTradeValue += pickValue.trade_value;
                                    sfTradeValueTotal += pickValue.sf_trade_value;
                                    tradeValueTotal += pickValue.trade_value;
                                    picks.push(pickValue);
                                    break;
                                }
                                else if (pick.pick > 8 && pickValue.last_name.includes('Late')) {
                                    sfPickTradeValue += pickValue.sf_trade_value;
                                    pickTradeValue += pickValue.trade_value;
                                    sfTradeValueTotal += pickValue.sf_trade_value;
                                    tradeValueTotal += pickValue.trade_value;
                                    picks.push(pickValue);
                                    break;
                                }
                                else if (pick.pick > 4 && pick.pick < 9 && pickValue.last_name.includes('Mid')) {
                                    sfPickTradeValue += pickValue.sf_trade_value;
                                    pickTradeValue += pickValue.trade_value;
                                    sfTradeValueTotal += pickValue.sf_trade_value;
                                    tradeValueTotal += pickValue.trade_value;
                                    picks.push(pickValue);
                                    break;
                                }
                            }
                        }
                    });
                    const rankedPicks = new _model_powerRankings__WEBPACK_IMPORTED_MODULE_0__["PositionPowerRanking"]('PI', sfPickTradeValue, pickTradeValue, picks);
                    this.powerRankings.push(new _model_powerRankings__WEBPACK_IMPORTED_MODULE_0__["TeamPowerRanking"](team, positionRoster, sfTradeValueTotal, tradeValueTotal, rankedPicks));
                });
                this.rankTeams(this.sleeperService.selectedLeague.isSuperflex);
            }
        }
        catch (e) {
            console.error('Error Mapping League Data: ', e);
        }
    }
    /**
     * sort position groups based on value
     * @param isSuperflex
     */
    sortRosterByValue(isSuperflex) {
        this.powerRankings.map(team => {
            for (let group of team.roster) {
                group.players.sort((a, b) => {
                    if (isSuperflex) {
                        return b.sf_trade_value - a.sf_trade_value;
                    }
                    else {
                        return b.trade_value - a.trade_value;
                    }
                });
            }
            team.picks.players.sort((a, b) => {
                if (isSuperflex) {
                    return b.sf_trade_value - a.sf_trade_value;
                }
                else {
                    return b.trade_value - a.trade_value;
                }
            });
        });
    }
    /**
     * calulates and ranks teams based on trade value
     * @param isSuperflex
     */
    rankTeams(isSuperflex) {
        // Sort position groups and picks desc
        this.sortRosterByValue(isSuperflex);
        // Rank position groups
        this.positionGroups.forEach((value, index) => {
            this.powerRankings.sort((teamA, teamB) => {
                if (isSuperflex) {
                    return teamB.roster[index].sfTradeValue - teamA.roster[index].sfTradeValue;
                }
                else {
                    return teamB.roster[index].tradeValue - teamA.roster[index].tradeValue;
                }
            });
            this.powerRankings.forEach((team, teamIndex) => {
                team.roster[index].rank = teamIndex + 1;
            });
        });
        // Rank picks
        this.powerRankings.sort((teamA, teamB) => {
            if (isSuperflex) {
                return teamB.picks.sfTradeValue - teamA.picks.sfTradeValue;
            }
            else {
                return teamB.picks.tradeValue - teamA.picks.tradeValue;
            }
        });
        this.powerRankings.forEach((team, teamIndex) => {
            team.picks.rank = teamIndex + 1;
        });
        // calculate best starting lineup
        this.calculateStarterValue();
        // Rank starting lineups
        this.powerRankings.sort((teamA, teamB) => {
            if (isSuperflex) {
                return teamB.sfTradeValueStarter - teamA.sfTradeValueStarter;
            }
            else {
                return teamB.tradeValueStarter - teamA.tradeValueStarter;
            }
        });
        this.powerRankings.forEach((team, index) => {
            team.starterRank = index + 1;
        });
        // rank overall points
        this.powerRankings.sort((teamA, teamB) => {
            if (isSuperflex) {
                return teamB.sfTradeValueOverall - teamA.sfTradeValueOverall;
            }
            else {
                return teamB.tradeValueOverall - teamA.tradeValueOverall;
            }
        });
        this.powerRankings.forEach((team, index) => {
            team.overallRank = index + 1;
        });
    }
    /**
     * calculates starters for teams
     */
    calculateStarterValue() {
        const positionGroupCount = [];
        for (const pos of this.positionGroups) {
            positionGroupCount.push(this.getCountForPosition(pos));
        }
        positionGroupCount.push(this.getCountForPosition('FLEX'));
        positionGroupCount.push(this.getCountForPosition('SUPER_FLEX'));
        this.powerRankings.map(team => {
            let teamRosterCount = positionGroupCount.slice();
            if (teamRosterCount[0] > 0) //qb
             {
                team.starters.push(...team.roster[0].players.slice(0, teamRosterCount[0]));
            }
            if (teamRosterCount[1] > 0) // rb
             {
                team.starters.push(...team.roster[1].players.slice(0, teamRosterCount[1]));
            }
            if (teamRosterCount[2] > 0) // wr
             {
                team.starters.push(...team.roster[2].players.slice(0, teamRosterCount[2]));
            }
            if (teamRosterCount[3] > 0) // te
             {
                team.starters.push(...team.roster[3].players.slice(0, teamRosterCount[3]));
            }
            if (teamRosterCount[4] > 0) // flex
             {
                teamRosterCount = this.getBestAvailableFlex(teamRosterCount[4], teamRosterCount, team);
            }
            if (teamRosterCount[5] > 0) // flex
             {
                if (team.roster[0].players.length > teamRosterCount[0]) {
                    team.starters.push(team.roster[0].players[teamRosterCount[0]]);
                    teamRosterCount[0]++;
                }
                else {
                    teamRosterCount = this.getBestAvailableFlex(teamRosterCount[5], teamRosterCount, team);
                }
            }
            for (const starter of team.starters) {
                team.sfTradeValueStarter += starter.sf_trade_value;
                team.tradeValueStarter += starter.trade_value;
            }
        });
    }
    /**
     * determines the best available flex option for team by trade value
     * @param spots
     * @param teamRosterCount
     * @param team
     * @param isSuperFlex
     * @private
     */
    getBestAvailableFlex(spots, teamRosterCount, team) {
        var _a, _b, _c;
        for (let i = 0; i < spots; i++) {
            const topRb = (_a = team.roster[1]) === null || _a === void 0 ? void 0 : _a.players[teamRosterCount[1]];
            const topWr = (_b = team.roster[2]) === null || _b === void 0 ? void 0 : _b.players[teamRosterCount[2]];
            const topTe = (_c = team.roster[3]) === null || _c === void 0 ? void 0 : _c.players[teamRosterCount[3]];
            const flexPlayer = this.getBetterPlayer(topTe, this.getBetterPlayer(topRb, topWr));
            if (flexPlayer) {
                teamRosterCount[this.positionGroups.indexOf(flexPlayer.position)]++;
                team.starters.push(flexPlayer);
            }
        }
        return teamRosterCount;
    }
    /**
     * determines which player has the higher value
     * @param player1
     * @param player2
     * @private
     */
    getBetterPlayer(player1, player2) {
        if (player1 && player2) {
            if (this.sleeperService.selectedLeague.isSuperflex) {
                if (player1.sf_trade_value > player2.sf_trade_value) {
                    return player1;
                }
                else {
                    return player2;
                }
            }
            else {
                if (player1.trade_value > player2.trade_value) {
                    return player1;
                }
                else {
                    return player2;
                }
            }
        }
        else if (player1) {
            return player1;
        }
        else {
            return player2;
        }
    }
    /**
     * calculates the number of starter positions by position in league
     * @param position
     * @private
     */
    getCountForPosition(position) {
        return this.sleeperService.selectedLeague.rosterPositions.filter(x => x === position).length;
    }
    /**
     * resets power rankings
     */
    reset() {
        this.powerRankings = [];
    }
    getRankByTeam(selectedTeam, property = 'overallRank') {
        for (let team of this.powerRankings) {
            if (team.team.roster.rosterId == selectedTeam.roster.rosterId) {
                return team[property];
            }
        }
    }
}
PowerRankingsService.ɵfac = function PowerRankingsService_Factory(t) { return new (t || PowerRankingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_2__["SleeperService"])); };
PowerRankingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PowerRankingsService, factory: PowerRankingsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "VCy5":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/player-comparisons/trade-value-line-chart/trade-value-line-chart.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: TradeValueLineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeValueLineChartComponent", function() { return TradeValueLineChartComponent; });
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _base_component_abstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-component.abstract */ "W5wg");
/* harmony import */ var chartjs_plugin_colorschemes_src_plugins_plugin_colorschemes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes */ "icLC");
/* harmony import */ var chartjs_plugin_colorschemes_src_colorschemes_colorschemes_tableau__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau */ "6QYa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_player_comparison_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/player-comparison.service */ "Iwnn");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









class TradeValueLineChartComponent extends _base_component_abstract__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(playerComparisonService) {
        super();
        this.playerComparisonService = playerComparisonService;
        this.selectedDateFilter = 'alltime';
        this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
                intersect: false,
                mode: 'index',
                position: 'nearest',
            },
            scales: {
                xAxes: [{
                        display: true,
                        gridLines: {
                            display: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Date',
                            fontColor: '#d3d3d3'
                        }
                    }],
                yAxes: [{
                        display: true,
                        gridLines: {
                            display: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Trade Value',
                            fontColor: '#d3d3d3'
                        }
                    }]
            },
            legend: {
                labels: {
                    fontColor: '#d3d3d3'
                }
            },
            plugins: {
                colorschemes: {
                    scheme: chartjs_plugin_colorschemes_src_colorschemes_colorschemes_tableau__WEBPACK_IMPORTED_MODULE_3__["Classic10"],
                    override: true
                },
                legend: {
                    position: 'top'
                }
            }
        };
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartPlugins = [];
    }
    ngOnInit() {
        this.updateTable();
        this.addSubscriptions(this.playerComparisonService.$updatePlayer.subscribe((player) => {
            setTimeout(() => {
                if (this.chart && this.chart.chart) {
                    for (let dataset of this.playerComparisonService.lineChartData) {
                        dataset.fill = this.playerComparisonService.lineChartData.length < 4;
                    }
                    this.chart.chart.config.data.datasets = this.playerComparisonService.lineChartData;
                    this.chart.chart.options.legend.position = 'top';
                    this.chart.updateColors();
                    this.chart.chart.update();
                }
            });
        }));
    }
    updateTable() {
        this.playerComparisonService.lineChartLabels = [];
        let displayDays;
        switch (this.selectedDateFilter) {
            case 'alltime':
                displayDays = this.calculateAllTime();
                break;
            case 'month':
                displayDays = 30;
                break;
            case '2week':
                displayDays = 14;
                break;
            default:
                displayDays = 7;
                break;
        }
        for (let i = 0; i < displayDays + 1; i++) {
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - (displayDays - i));
            this.playerComparisonService.lineChartLabels.push(yesterday.toISOString().slice(0, 10));
        }
        this.playerComparisonService.refreshTable();
    }
    calculateAllTime() {
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date();
        const secondDate = new Date('2021-04-16T12:00:00');
        const diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
        return diffDays;
    }
}
TradeValueLineChartComponent.ɵfac = function TradeValueLineChartComponent_Factory(t) { return new (t || TradeValueLineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_player_comparison_service__WEBPACK_IMPORTED_MODULE_5__["PlayerComparisonService"])); };
TradeValueLineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TradeValueLineChartComponent, selectors: [["app-trade-value-line-chart"]], viewQuery: function TradeValueLineChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_0__["BaseChartDirective"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 7, consts: [[1, "margin-bot-20", 2, "overflow", "auto", 3, "ngModel", "ngModelChange", "change"], ["value", "alltime"], ["value", "month"], ["value", "2week"], ["value", "week"], [2, "display", "block"], ["baseChart", "", "width", "600", "height", "400", 3, "datasets", "labels", "options", "legend", "chartType", "plugins"]], template: function TradeValueLineChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-button-toggle-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TradeValueLineChartComponent_Template_mat_button_toggle_group_ngModelChange_2_listener($event) { return ctx.selectedDateFilter = $event; })("change", function TradeValueLineChartComponent_Template_mat_button_toggle_group_change_2_listener() { return ctx.updateTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-button-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "All-time");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "A Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "2 Weeks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "A Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "canvas", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectedDateFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datasets", ctx.playerComparisonService.lineChartData)("labels", ctx.playerComparisonService.lineChartLabels)("options", ctx.lineChartOptions)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggle"], ng2_charts__WEBPACK_IMPORTED_MODULE_0__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFkZS12YWx1ZS1saW5lLWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "W5wg":
/*!*******************************************************!*\
  !*** ./src/app/components/base-component.abstract.ts ***!
  \*******************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BaseComponent {
    constructor() {
        /**
         * List of components subscribed to
         */
        this.subscriptions = [];
    }
    /**
     * deletes each subscription for component
     * if your child component still needs to use ngOnDestroy,
     * add a call to super.ngOnDestroy() to run
     */
    ngOnDestroy() {
        for (const subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }
    /** add subscription to list
     * Whenever there's a sub in a class just add this.addSubscription
     * @param subs list of subscriptions
     * @protected
     */
    addSubscriptions(...subs) {
        this.subscriptions.push(...subs);
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(); };
BaseComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BaseComponent, factory: BaseComponent.ɵfac });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initialize, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _services_endpoints_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/endpoints.service */ "HruU");
/* harmony import */ var _services_init_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/init/config.service */ "DFf+");
/* harmony import */ var _services_init_startup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/init/startup.service */ "NMd0");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_power_rankings_power_rankings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/power-rankings/power-rankings.component */ "tCif");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _components_player_values_ktc_table_ktc_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/player-values/ktc-table/ktc-table.component */ "1P4D");
/* harmony import */ var _components_player_values_player_values_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/player-values/player-values.component */ "zLtU");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _components_power_rankings_power_rankings_table_power_rankings_table_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/power-rankings/power-rankings-table/power-rankings-table.component */ "RVpf");
/* harmony import */ var _components_draft_draft_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/draft/draft.component */ "qwBd");
/* harmony import */ var _components_draft_draft_table_draft_table_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/draft/draft-table/draft-table.component */ "RfqT");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _components_playoff_calculator_playoff_calculator_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/playoff-calculator/playoff-calculator.component */ "bfsi");
/* harmony import */ var _components_playoff_calculator_schedule_comparison_schedule_comparison_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/playoff-calculator/schedule-comparison/schedule-comparison.component */ "ScK4");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _components_playoff_calculator_weekly_record_vs_all_weekly_record_vs_all_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/playoff-calculator/weekly-record-vs-all/weekly-record-vs-all.component */ "2u70");
/* harmony import */ var _components_draft_completed_draft_table_completed_draft_table_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/draft/completed-draft-table/completed-draft-table.component */ "05jv");
/* harmony import */ var _components_player_comparisons_player_comparisons_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/player-comparisons/player-comparisons.component */ "cfV4");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _components_modals_add_player_comparison_modal_add_player_comparison_modal_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/modals/add-player-comparison-modal/add-player-comparison-modal.component */ "wGn4");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_player_comparisons_trade_value_line_chart_trade_value_line_chart_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/player-comparisons/trade-value-line-chart/trade-value-line-chart.component */ "VCy5");
/* harmony import */ var chartjs_plugin_colorschemes__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! chartjs-plugin-colorschemes */ "wZst");
/* harmony import */ var chartjs_plugin_colorschemes__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_colorschemes__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _components_player_details_player_details_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/player-details/player-details.component */ "Mg9l");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _components_player_details_player_details_weekly_stats_line_chart_player_details_weekly_stats_line_chart_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/player-details/player-details-weekly-stats-line-chart/player-details-weekly-stats-line-chart.component */ "Ftb9");
/* harmony import */ var _components_player_details_player_details_weekly_box_scores_table_player_details_weekly_box_scores_table_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/player-details/player-details-weekly-box-scores-table/player-details-weekly-box-scores-table.component */ "yQ9t");
/* harmony import */ var _components_fantasy_team_details_fantasy_team_details_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/fantasy-team-details/fantasy-team-details.component */ "wrNJ");
/* harmony import */ var _components_power_rankings_power_rankings_chart_power_rankings_chart_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/power-rankings/power-rankings-chart/power-rankings-chart.component */ "SpCN");
/* harmony import */ var _components_fantasy_team_details_fantasy_team_details_weekly_points_chart_fantasy_team_details_weekly_points_chart_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/fantasy-team-details/fantasy-team-details-weekly-points-chart/fantasy-team-details-weekly-points-chart.component */ "8/9n");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");

























































function initialize(startupService) {
    return () => {
        return startupService.startupApplication();
    };
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [_services_endpoints_service__WEBPACK_IMPORTED_MODULE_5__["EndpointsService"],
        _services_init_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
        _services_init_startup_service__WEBPACK_IMPORTED_MODULE_7__["StartupService"],
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
            useFactory: initialize,
            deps: [_services_init_startup_service__WEBPACK_IMPORTED_MODULE_7__["StartupService"]],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__["MatBadgeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__["MatDividerModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__["MatButtonToggleModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__["MatCheckboxModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_40__["ChartsModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_41__["MatChipsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_43__["MatDialogModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_46__["DragDropModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__["MatTooltipModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_49__["MatCardModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_55__["FlexLayoutModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _components_power_rankings_power_rankings_component__WEBPACK_IMPORTED_MODULE_9__["PowerRankingsComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        _components_player_values_ktc_table_ktc_table_component__WEBPACK_IMPORTED_MODULE_13__["KtcTableComponent"],
        _components_player_values_player_values_component__WEBPACK_IMPORTED_MODULE_14__["PlayerValuesComponent"],
        _components_power_rankings_power_rankings_table_power_rankings_table_component__WEBPACK_IMPORTED_MODULE_27__["PowerRankingsTableComponent"],
        _components_draft_draft_component__WEBPACK_IMPORTED_MODULE_28__["DraftComponent"],
        _components_draft_draft_table_draft_table_component__WEBPACK_IMPORTED_MODULE_29__["DraftTableComponent"],
        _components_playoff_calculator_playoff_calculator_component__WEBPACK_IMPORTED_MODULE_34__["PlayoffCalculatorComponent"],
        _components_playoff_calculator_schedule_comparison_schedule_comparison_component__WEBPACK_IMPORTED_MODULE_35__["ScheduleComparisonComponent"],
        _components_playoff_calculator_weekly_record_vs_all_weekly_record_vs_all_component__WEBPACK_IMPORTED_MODULE_37__["WeeklyRecordVsAllComponent"],
        _components_draft_completed_draft_table_completed_draft_table_component__WEBPACK_IMPORTED_MODULE_38__["CompletedDraftTableComponent"],
        _components_player_comparisons_player_comparisons_component__WEBPACK_IMPORTED_MODULE_39__["PlayerComparisonsComponent"],
        _components_modals_add_player_comparison_modal_add_player_comparison_modal_component__WEBPACK_IMPORTED_MODULE_42__["AddPlayerComparisonModalComponent"],
        _components_player_comparisons_trade_value_line_chart_trade_value_line_chart_component__WEBPACK_IMPORTED_MODULE_44__["TradeValueLineChartComponent"],
        _components_player_details_player_details_component__WEBPACK_IMPORTED_MODULE_48__["PlayerDetailsComponent"],
        _components_power_rankings_power_rankings_chart_power_rankings_chart_component__WEBPACK_IMPORTED_MODULE_53__["PowerRankingsChartComponent"],
        _components_player_details_player_details_weekly_stats_line_chart_player_details_weekly_stats_line_chart_component__WEBPACK_IMPORTED_MODULE_50__["PlayerDetailsWeeklyStatsLineChartComponent"],
        _components_player_details_player_details_weekly_box_scores_table_player_details_weekly_box_scores_table_component__WEBPACK_IMPORTED_MODULE_51__["PlayerDetailsWeeklyBoxScoresTableComponent"],
        _components_fantasy_team_details_fantasy_team_details_component__WEBPACK_IMPORTED_MODULE_52__["FantasyTeamDetailsComponent"],
        _components_fantasy_team_details_fantasy_team_details_weekly_points_chart_fantasy_team_details_weekly_points_chart_component__WEBPACK_IMPORTED_MODULE_54__["FantasyTeamDetailsWeeklyPointsChartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__["MatBadgeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__["MatDividerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__["MatButtonToggleModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__["MatCheckboxModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_40__["ChartsModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_41__["MatChipsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_43__["MatDialogModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_46__["DragDropModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__["MatTooltipModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_49__["MatCardModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_55__["FlexLayoutModule"]] }); })();


/***/ }),

/***/ "Zsxa":
/*!***********************************************!*\
  !*** ./src/app/components/model/mockDraft.ts ***!
  \***********************************************/
/*! exports provided: TeamMockDraftPick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMockDraftPick", function() { return TeamMockDraftPick; });
class TeamMockDraftPick {
    constructor(number, display, ownerName, teamName) {
        this.pick = number;
        this.pickdisplay = display;
        this.pickOwner = ownerName;
        this.pickTeam = teamName;
    }
}


/***/ }),

/***/ "bIPV":
/*!*******************************************************!*\
  !*** ./src/app/components/model/playoffCalculator.ts ***!
  \*******************************************************/
/*! exports provided: Division */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Division", function() { return Division; });
class Division {
    constructor(number, divisionTeams) {
        this.divisionId = number;
        this.teams = divisionTeams;
    }
}


/***/ }),

/***/ "bfsi":
/*!*******************************************************************************!*\
  !*** ./src/app/components/playoff-calculator/playoff-calculator.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PlayoffCalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayoffCalculatorComponent", function() { return PlayoffCalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/sleeper.service */ "ebv/");
/* harmony import */ var _services_playoff_calculator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/playoff-calculator.service */ "QOKW");
/* harmony import */ var _services_matchup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/matchup.service */ "pxwm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _schedule_comparison_schedule_comparison_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule-comparison/schedule-comparison.component */ "ScK4");
/* harmony import */ var _weekly_record_vs_all_weekly_record_vs_all_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weekly-record-vs-all/weekly-record-vs-all.component */ "2u70");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function PlayoffCalculatorComponent_div_4_div_2_mat_header_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Team Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["../../team", a1]; };
function PlayoffCalculatorComponent_div_4_div_2_mat_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, team_r15.owner.ownerName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", team_r15.owner.teamName, " ");
} }
function PlayoffCalculatorComponent_div_4_div_2_mat_header_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayoffCalculatorComponent_div_4_div_2_mat_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", team_r16.roster.teamMetrics.wins, " - ", team_r16.roster.teamMetrics.losses, "", team_r16.roster.teamMetrics.ties > 0 ? " - " + team_r16.roster.teamMetrics.ties : "", "");
} }
function PlayoffCalculatorComponent_div_4_div_2_mat_header_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Points For");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayoffCalculatorComponent_div_4_div_2_mat_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r17 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.roundNumber(team_r17.roster.teamMetrics.fpts));
} }
function PlayoffCalculatorComponent_div_4_div_2_mat_header_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Realized Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayoffCalculatorComponent_div_4_div_2_mat_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r18 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r12.getPointPotentialPercent(team_r18) || "0", "%");
} }
function PlayoffCalculatorComponent_div_4_div_2_mat_header_row_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
const _c1 = function (a0) { return { "mat-table-highlight": a0 }; };
function PlayoffCalculatorComponent_div_4_div_2_mat_row_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row", 25);
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, row_r19.roster.teamMetrics.rank <= ctx_r14.sleeperService.selectedLeague.playoffTeams && row_r19.roster.teamMetrics.wins > 0));
} }
function PlayoffCalculatorComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlayoffCalculatorComponent_div_4_div_2_mat_header_cell_5_Template, 2, 0, "mat-header-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayoffCalculatorComponent_div_4_div_2_mat_cell_6_Template, 2, 4, "mat-cell", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayoffCalculatorComponent_div_4_div_2_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PlayoffCalculatorComponent_div_4_div_2_mat_cell_9_Template, 2, 3, "mat-cell", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PlayoffCalculatorComponent_div_4_div_2_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PlayoffCalculatorComponent_div_4_div_2_mat_cell_12_Template, 2, 1, "mat-cell", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlayoffCalculatorComponent_div_4_div_2_mat_header_cell_14_Template, 2, 0, "mat-header-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PlayoffCalculatorComponent_div_4_div_2_mat_cell_15_Template, 3, 1, "mat-cell", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PlayoffCalculatorComponent_div_4_div_2_mat_header_row_16_Template, 1, 0, "mat-header-row", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PlayoffCalculatorComponent_div_4_div_2_mat_row_17_Template, 1, 3, "mat-row", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const division_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.sleeperService.selectedLeague.divisionNames[division_r4.divisionId - 1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", division_r4.teams);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.divisionTableCols);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r3.divisionTableCols);
} }
function PlayoffCalculatorComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayoffCalculatorComponent_div_4_div_2_Template, 18, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Schedule Comparisons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Calculates what each teams record would be with the other team schedule. For games where the same team plays each-other, a win/loss is assigned if the team scored more than that weeks median");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-schedule-comparison");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Weekly Record Vs All Teams");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "A team's record versus each team during that week. The table is sorted by most overall wins.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-weekly-record-vs-all");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.playoffCalculatorService.divisions);
} }
function PlayoffCalculatorComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cannot generate league analytics cause no league was selected. Please select a league.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose League");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayoffCalculatorComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cannot generate league analytics because season hasn't started yet. Please select a different league or year.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose League");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PlayoffCalculatorComponent {
    constructor(sleeperService, playoffCalculatorService, matchupService) {
        this.sleeperService = sleeperService;
        this.playoffCalculatorService = playoffCalculatorService;
        this.matchupService = matchupService;
        this.divisionTableCols = ['teamName', 'record', 'pf', 'pot'];
    }
    ngOnInit() {
        if (this.sleeperService.leagueLoaded) {
            this.matchupService.initMatchUpCharts(this.sleeperService.selectedLeague);
            this.playoffCalculatorService.generateDivisions(this.sleeperService.selectedLeague, this.sleeperService.sleeperTeamDetails);
            console.log(this.sleeperService.selectedLeague);
        }
    }
    roundNumber(num) {
        return Math.round(num);
    }
    getPointPotentialPercent(team) {
        return Math.round(team.roster.teamMetrics.fpts / team.roster.teamMetrics.ppts * 100);
    }
}
PlayoffCalculatorComponent.ɵfac = function PlayoffCalculatorComponent_Factory(t) { return new (t || PlayoffCalculatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_1__["SleeperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_playoff_calculator_service__WEBPACK_IMPORTED_MODULE_2__["PlayoffCalculatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_matchup_service__WEBPACK_IMPORTED_MODULE_3__["MatchupService"])); };
PlayoffCalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayoffCalculatorComponent, selectors: [["app-playoff-calculator"]], decls: 7, vars: 3, consts: [[1, "margin-top-10", "large-bold-header-text", "center-text"], [1, "center-text", "margin-top-10"], ["class", "margin-top-10", 4, "ngIf"], ["class", "center-text margin-top-50", 4, "ngIf"], [1, "margin-top-10"], [1, "standings-row"], ["class", "standings-col", 4, "ngFor", "ngForOf"], ["mat-align-tabs", "center", 1, "margin-top-25"], ["label", "Schedule Comparison"], [1, "mid-bold-text", "margin-top-10", "center-text"], [1, "margin-top-10", "center-text"], ["label", "Weekly Record Vs All"], [1, "standings-col"], [1, "center-text", "mid-bold-text"], [1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "teamName"], [4, "matHeaderCellDef"], ["class", "link--text__no__underline", 3, "routerLink", 4, "matCellDef"], ["matColumnDef", "record"], [4, "matCellDef"], ["matColumnDef", "pf"], ["matColumnDef", "pot"], [4, "matHeaderRowDef"], [3, "ngClass", 4, "matRowDef", "matRowDefColumns"], [1, "link--text__no__underline", 3, "routerLink"], [3, "ngClass"], [1, "center-text", "margin-top-50"], [1, "warning__alert"], ["mat-raised-button", "", "color", "warn", "routerLink", "./home"]], template: function PlayoffCalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Playoff Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Team standings from the league with points for and realized points. Realized points is calculated by dividing the actual points for and the max potential points for.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlayoffCalculatorComponent_div_4_Template, 16, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlayoffCalculatorComponent_div_5_Template, 6, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayoffCalculatorComponent_div_6_Template, 6, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sleeperService.leagueLoaded && ctx.playoffCalculatorService.divisions.length > 0 && ((ctx.sleeperService.selectedLeague == null ? null : ctx.sleeperService.selectedLeague.status) !== "pre_draft" && (ctx.sleeperService.selectedLeague == null ? null : ctx.sleeperService.selectedLeague.status) !== "drafting"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sleeperService.leagueLoaded && (ctx.sleeperService.selectedLeague == null ? null : ctx.sleeperService.selectedLeague.status) !== "pre_draft" && (ctx.sleeperService.selectedLeague == null ? null : ctx.sleeperService.selectedLeague.status) !== "drafting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.sleeperService.selectedLeague == null ? null : ctx.sleeperService.selectedLeague.status) === "pre_draft" || (ctx.sleeperService.selectedLeague == null ? null : ctx.sleeperService.selectedLeague.status) === "drafting");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTab"], _schedule_comparison_schedule_comparison_component__WEBPACK_IMPORTED_MODULE_6__["ScheduleComparisonComponent"], _weekly_record_vs_all_weekly_record_vs_all_component__WEBPACK_IMPORTED_MODULE_7__["WeeklyRecordVsAllComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], styles: [".standings-row[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%; \r\n  \r\n  border-spacing: 10px; \r\n}\r\n.standings-col[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n}\r\n.mat-table-highlight[_ngcontent-%COMP%] {\r\n  background: #577380;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXlvZmYtY2FsY3VsYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVcsRUFBRSxXQUFXO0VBQ3hCLG9DQUFvQztFQUNwQyxvQkFBb0IsRUFBRSxXQUFXO0FBQ25DO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJwbGF5b2ZmLWNhbGN1bGF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFuZGluZ3Mtcm93IHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTsgLypPcHRpb25hbCovXHJcbiAgLyp0YWJsZS1sYXlvdXQ6IGZpeGVkOyAhKk9wdGlvbmFsKiEqL1xyXG4gIGJvcmRlci1zcGFjaW5nOiAxMHB4OyAvKk9wdGlvbmFsKi9cclxufVxyXG4uc3RhbmRpbmdzLWNvbCB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuLm1hdC10YWJsZS1oaWdobGlnaHQge1xyXG4gIGJhY2tncm91bmQ6ICM1NzczODA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "cfV4":
/*!*******************************************************************************!*\
  !*** ./src/app/components/player-comparisons/player-comparisons.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PlayerComparisonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComparisonsComponent", function() { return PlayerComparisonsComponent; });
/* harmony import */ var _base_component_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component.abstract */ "W5wg");
/* harmony import */ var _modals_add_player_comparison_modal_add_player_comparison_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/add-player-comparison-modal/add-player-comparison-modal.component */ "wGn4");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_ktc_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api/ktc-api.service */ "BCR2");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/player.service */ "QIP1");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/sleeper.service */ "ebv/");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_player_comparison_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/player-comparison.service */ "Iwnn");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _trade_value_line_chart_trade_value_line_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./trade-value-line-chart/trade-value-line-chart.component */ "VCy5");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");

















function PlayerComparisonsComponent_mat_chip_list_33_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-chip", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("removed", function PlayerComparisonsComponent_mat_chip_list_33_mat_chip_1_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const player_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r5.playerComparisonService.onRemove(player_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", player_r4.name, " ");
} }
function PlayerComparisonsComponent_mat_chip_list_33_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-chip-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function PlayerComparisonsComponent_mat_chip_list_33_Template_mat_chip_list_cdkDropListDropped_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PlayerComparisonsComponent_mat_chip_list_33_mat_chip_1_Template, 4, 1, "mat-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkDropListData", ctx_r0.playerComparisonService.selectedPlayers);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.playerComparisonService.selectedPlayers);
} }
function PlayerComparisonsComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlayerComparisonsComponent_div_34_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.addNewPlayerModal(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Players to Group 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PlayerComparisonsComponent_div_35_mat_chip_list_1_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-chip", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("removed", function PlayerComparisonsComponent_div_35_mat_chip_list_1_mat_chip_1_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const player_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r14.playerComparisonService.onRemove(player_r13, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", player_r13.name, " ");
} }
function PlayerComparisonsComponent_div_35_mat_chip_list_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-chip-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function PlayerComparisonsComponent_div_35_mat_chip_list_1_Template_mat_chip_list_cdkDropListDropped_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r16.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PlayerComparisonsComponent_div_35_mat_chip_list_1_mat_chip_1_Template, 4, 1, "mat-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkDropListData", ctx_r11.playerComparisonService.group2SelectedPlayers);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r11.playerComparisonService.group2SelectedPlayers);
} }
function PlayerComparisonsComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PlayerComparisonsComponent_div_35_mat_chip_list_1_Template, 2, 2, "mat-chip-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.playerComparisonService.group2SelectedPlayers.length !== 0);
} }
class PlayerComparisonsComponent extends _base_component_abstract__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"] {
    constructor(ktcApiService, playerService, sleeperService, dialog, playerComparisonService) {
        super();
        this.ktcApiService = ktcApiService;
        this.playerService = playerService;
        this.sleeperService = sleeperService;
        this.dialog = dialog;
        this.playerComparisonService = playerComparisonService;
    }
    ngOnInit() {
        if (this.sleeperService.leagueLoaded) {
            this.playerComparisonService.isSuperFlex = this.sleeperService.selectedLeague.isSuperflex;
        }
        this.playerService.loadPlayerValuesForToday();
        this.addSubscriptions(this.playerService.$currentPlayerValuesLoaded.subscribe(() => {
            if (this.playerComparisonService.lineChartData.length == 1 && this.playerComparisonService.selectedPlayers[0] === undefined) {
                this.playerComparisonService.addPlayerToCharts(this.playerService.playerValues[this.getRandomPlayer(true)]);
                this.playerComparisonService.addPlayerToCharts(this.playerService.playerValues[this.getRandomPlayer(true)]);
            }
        }));
        if (this.playerComparisonService.selectedPlayers.length == 0 && this.playerService.playerValues.length > 0) {
            this.playerComparisonService.addPlayerToCharts(this.playerService.playerValues[this.getRandomPlayer(true)]);
            this.playerComparisonService.addPlayerToCharts(this.playerService.playerValues[this.getRandomPlayer(true)]);
        }
    }
    getRandomPlayer(stars = false) {
        return Math.floor(Math.random() * (stars ? 50 : this.playerService.playerValues.length - 1)) + 1;
    }
    addRandomPlayer() {
        this.playerComparisonService.addPlayerToCharts(this.playerService.playerValues[this.getRandomPlayer()]);
        if (this.playerComparisonService.isGroupMode) {
            this.playerComparisonService.addPlayerToCharts(this.playerService.playerValues[this.getRandomPlayer()], true);
        }
    }
    addNewPlayerModal(isGroup2 = false) {
        this.dialog.open(_modals_add_player_comparison_modal_add_player_comparison_modal_component__WEBPACK_IMPORTED_MODULE_1__["AddPlayerComparisonModalComponent"], {
            height: '550px',
            width: '600px',
            data: {
                isGroup2: isGroup2,
            }
        });
    }
    /**
     * reorder players
     * @param event
     */
    drop(event) {
        if (event.previousIndex !== event.currentIndex && !this.playerComparisonService.isGroupMode) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            this.playerComparisonService.refreshTable();
        }
    }
}
PlayerComparisonsComponent.ɵfac = function PlayerComparisonsComponent_Factory(t) { return new (t || PlayerComparisonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_ktc_api_service__WEBPACK_IMPORTED_MODULE_4__["KTCApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_6__["SleeperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_player_comparison_service__WEBPACK_IMPORTED_MODULE_8__["PlayerComparisonService"])); };
PlayerComparisonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PlayerComparisonsComponent, selectors: [["app-player-comparisons"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 38, vars: 6, consts: [[1, "table-container"], [1, "margin-top-10", "large-bold-header-text", "center-text"], [1, "center-text", "margin-top-10"], ["href", "https://keeptradecut.com/", "target", "_blank", 1, "info__alert"], [1, "info__alert"], [1, "margin-top-25"], [1, "button-left"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "add-icon-button"], ["color", "primary", 1, "player-value-checkbox-margin", 3, "ngModel", "ngModelChange", "change"], [1, "container_spacer"], [1, "button-right"], ["mat-raised-button", "", 1, "player-value-checkbox-margin", 3, "click"], [1, "margin-top-10"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["class", "margin-top-25", 4, "ngIf"], ["class", "margin-top-10", 4, "ngIf"], [1, "margin-top-50"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "cdkDropListData", "cdkDropListDropped"], ["cdkDrag", "", 3, "removed", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 3, "removed"], ["matChipRemove", ""]], template: function PlayerComparisonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Player Value Comparisons");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Player values are scraped from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "KeepTradeCut.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " dynasty rankings calculated from over ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "600,000+");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " data points. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "The scoring is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "0.5 PPR");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, ", the table below will update depending on whether your league is Superflex or not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlayerComparisonsComponent_Template_button_click_18_listener() { return ctx.addNewPlayerModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-slide-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PlayerComparisonsComponent_Template_mat_slide_toggle_ngModelChange_22_listener($event) { return ctx.playerComparisonService.isGroupMode = $event; })("change", function PlayerComparisonsComponent_Template_mat_slide_toggle_change_22_listener() { return ctx.playerComparisonService.toggleGroupMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Enable Groups ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-slide-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PlayerComparisonsComponent_Template_mat_slide_toggle_ngModelChange_26_listener($event) { return ctx.playerComparisonService.isSuperFlex = $event; })("change", function PlayerComparisonsComponent_Template_mat_slide_toggle_change_26_listener() { return ctx.playerComparisonService.refreshTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " SuperFlex ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlayerComparisonsComponent_Template_button_click_28_listener() { return ctx.addRandomPlayer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Random Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, PlayerComparisonsComponent_mat_chip_list_33_Template, 2, 2, "mat-chip-list", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, PlayerComparisonsComponent_div_34_Template, 6, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, PlayerComparisonsComponent_div_35_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "app-trade-value-line-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Players ", ctx.playerComparisonService.isGroupMode ? "to Group 1" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.playerComparisonService.isGroupMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.playerComparisonService.isSuperFlex);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.playerComparisonService.selectedPlayers.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.playerComparisonService.isGroupMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.playerComparisonService.isGroupMode);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _trade_value_line_chart_trade_value_line_chart_component__WEBPACK_IMPORTED_MODULE_14__["TradeValueLineChartComponent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChip"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipRemove"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5ZXItY29tcGFyaXNvbnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ebv/":
/*!*********************************************!*\
  !*** ./src/app/services/sleeper.service.ts ***!
  \*********************************************/
/*! exports provided: SleeperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleeperService", function() { return SleeperService; });
/* harmony import */ var _model_SleeperUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/SleeperUser */ "A9Rc");
/* harmony import */ var _model_SleeperLeague__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/SleeperLeague */ "ynWM");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_sleeper_sleeper_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/sleeper/sleeper-api.service */ "L2kU");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");







class SleeperService {
    constructor(sleeperApiService, spinner) {
        this.sleeperApiService = sleeperApiService;
        this.spinner = spinner;
        this.leagueLoaded = false;
        this.upcomingDrafts = [];
        this.completedDrafts = [];
    }
    /**
     * loads team data, roster, and draft picks by league
     * @param selectedLeague
     */
    $loadNewLeague(selectedLeague) {
        this.leagueLoaded = false;
        this.selectedLeague = selectedLeague;
        if (this.selectedLeague.rosterPositions.filter(x => x === 'QB').length > 1) {
            this.selectedLeague.isSuperflex = true;
        }
        return this.sleeperApiService.getSleeperOwnersbyLeagueId(selectedLeague.leagueId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((owners) => {
            // fetch matchUps for league
            let leagueMatchups = {};
            const observe = [];
            for (let weekNum = selectedLeague.startWeek; weekNum < 19; weekNum++) {
                observe.push(this.sleeperApiService.getSleeperMatchUpsForWeekByLeagueId(selectedLeague.leagueId, weekNum).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((weekMatchups) => {
                    const matchupData = [];
                    for (let matchup of weekMatchups) {
                        matchupData.push(new _model_SleeperLeague__WEBPACK_IMPORTED_MODULE_1__["SleeperTeamMatchUpData"](matchup));
                    }
                    leagueMatchups[weekNum] = matchupData;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(weekMatchups);
                })));
            }
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observe).subscribe(() => {
                this.selectedLeague.leagueMatchUps = leagueMatchups;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            });
            // fetch rosters and drafts picks
            return this.sleeperApiService.getSleeperRostersbyLeagueId(selectedLeague.leagueId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((rosters) => {
                console.log('Fetching Roster Ids...');
                this.sleeperTeamDetails = [];
                rosters.map(roster => {
                    for (const owner of owners) {
                        if (roster.ownerId == owner.userId) {
                            this.sleeperTeamDetails.push(new _model_SleeperLeague__WEBPACK_IMPORTED_MODULE_1__["SleeperTeam"](owner, roster));
                            break;
                        }
                    }
                });
                return this.sleeperApiService.getSleeperDraftbyLeagueId(selectedLeague.leagueId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((draftIds) => {
                    draftIds.map((draftId) => {
                        console.log('processing draft:', draftId);
                        return this.$assignPicks(draftId).subscribe((x) => {
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(x);
                        });
                    });
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.sleeperTeamDetails);
                }));
            }));
        }));
    }
    /**
     * loads new user data from sleeper username
     * @param userName
     */
    loadNewUser(userName, year) {
        this.spinner.show();
        console.time('Fetch Sleeper User Data');
        this.selectedYear = year;
        try {
            this.sleeperApiService.getSleeperUserInformation(userName).subscribe((userData) => {
                if (userData == null) {
                    this.spinner.hide();
                    this.sleeperUser = null;
                    throw new Error('User data could not be found. Try again!');
                }
                this.sleeperApiService.getSleeperLeaguesByUserID(userData.user_id, year).subscribe((response) => {
                    this.sleeperUser = { leagues: response, userData: userData };
                    this.spinner.hide();
                    console.timeEnd('Fetch Sleeper User Data');
                });
            });
        }
        catch (e) {
            this.spinner.hide();
            console.error('Failed to get data for user ', e);
        }
    }
    $assignPicks(draftId) {
        return this.sleeperApiService.getSleeperDraftDetailsByDraftId(draftId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((draft) => {
            if (draft.status === 'pre_draft' && draft.draftOrder) {
                this.upcomingDrafts.push(draft);
                return this.sleeperApiService.getSleeperTradedPicksByDraftId(draft.draftId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((tradedPicks) => {
                    this.sleeperTeamDetails.map((team) => {
                        let draftPicks = [];
                        const slot = draft.draftOrder[team.owner.userId];
                        for (let i = 0; i < draft.rounds; i++) {
                            let slotPick = slot;
                            if (draft.type == 'snake' && i + 1 % 2 == 0) {
                                slotPick = this.selectedLeague.totalRosters - slot;
                            }
                            draftPicks.push(new _model_SleeperUser__WEBPACK_IMPORTED_MODULE_0__["DraftCapital"](true, i + 1, Number(slot), draft.season));
                        }
                        const rosterId = draft.slotToRosterId[slot];
                        tradedPicks.reverse();
                        tradedPicks.map((tradedPick) => {
                            if (tradedPick.rosterId == rosterId && tradedPick.ownerId !== rosterId) {
                                const index = draftPicks.map((i) => i.round).indexOf(tradedPick.round);
                                draftPicks.splice(index, 1);
                            }
                            else if (tradedPick.ownerId == rosterId) {
                                let pickSlot = Number(Object.keys(draft.slotToRosterId).find(key => draft.slotToRosterId[key] === tradedPick.rosterId));
                                if (draft.type == 'snake' && tradedPick.round % 2 == 0) {
                                    pickSlot = this.selectedLeague.totalRosters - pickSlot;
                                }
                                if (!this.doesPickAlreadyExist(tradedPick, draftPicks, pickSlot)) {
                                    draftPicks.push(new _model_SleeperUser__WEBPACK_IMPORTED_MODULE_0__["DraftCapital"](false, tradedPick.round, pickSlot, tradedPick.season));
                                }
                            }
                        });
                        team.draftCapital = draftPicks;
                    });
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.sleeperTeamDetails);
                }));
            }
            if (draft.status === 'complete' && draft.draftOrder) {
                return this.sleeperApiService.getSleeperCompletedDraftsByDraftId(draft.draftId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((picks) => {
                    return this.sleeperApiService.getSleeperTradedPicksByDraftId(draft.draftId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((tradedPicks) => {
                        tradedPicks.map((tradedPick) => {
                            picks.filter(pick => {
                                if (pick.round === tradedPick.round && tradedPick.previousOwnerId === pick.rosterId) {
                                    pick.rosterId = tradedPick.rosterId;
                                }
                            });
                        });
                        this.completedDrafts.push(new _model_SleeperUser__WEBPACK_IMPORTED_MODULE_0__["CompletedDraft"](draft, picks));
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.sleeperTeamDetails);
                    }));
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.sleeperTeamDetails);
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.sleeperTeamDetails);
        }));
    }
    resetLeague() {
        this.leagueLoaded = false;
        this.selectedLeague = null;
        this.sleeperTeamDetails = [];
        this.completedDrafts = [];
        this.upcomingDrafts = [];
    }
    doesPickAlreadyExist(tradedPick, draftPicks, pickNumber) {
        for (const pick of draftPicks) {
            if (pick.round === tradedPick.round && pick.pick === pickNumber) {
                return true;
            }
        }
        return false;
    }
    getTeamByRosterId(rosterId) {
        for (let team of this.sleeperTeamDetails) {
            if (team.roster.rosterId == rosterId) {
                return team;
            }
        }
        return null;
    }
}
SleeperService.ɵfac = function SleeperService_Factory(t) { return new (t || SleeperService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_api_sleeper_sleeper_api_service__WEBPACK_IMPORTED_MODULE_5__["SleeperApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
SleeperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SleeperService, factory: SleeperService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "epAl":
/*!********************************************************************!*\
  !*** ./src/app/services/api/sleeper/sleeper-api-config.service.ts ***!
  \********************************************************************/
/*! exports provided: SleeperApiConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleeperApiConfigService", function() { return SleeperApiConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SleeperApiConfigService {
    constructor() {
        this._getSleeperUsernameEndpoint = '';
        this._getSleeperLeagueEndpoint = '';
        this._getSleeperDraftEndpoint = '';
        this._getSleeperStatsEndpoint = '';
        this._getSleeperNFLStateEndpoint = '';
        this._getSleeperProjectionsEndpoint = '';
    }
    get getSleeperUsernameEndpoint() {
        return this._getSleeperUsernameEndpoint;
    }
    set getSleeperUsernameEndpoint(value) {
        this._getSleeperUsernameEndpoint = value;
    }
    get getSleeperLeagueEndpoint() {
        return this._getSleeperLeagueEndpoint;
    }
    set getSleeperLeagueEndpoint(value) {
        this._getSleeperLeagueEndpoint = value;
    }
    get getSleeperDraftEndpoint() {
        return this._getSleeperDraftEndpoint;
    }
    set getSleeperDraftEndpoint(value) {
        this._getSleeperDraftEndpoint = value;
    }
    get getSleeperStatsEndpoint() {
        return this._getSleeperStatsEndpoint;
    }
    set getSleeperStatsEndpoint(value) {
        this._getSleeperStatsEndpoint = value;
    }
    get getSleeperNFLStateEndpoint() {
        return this._getSleeperNFLStateEndpoint;
    }
    set getSleeperNFLStateEndpoint(value) {
        this._getSleeperNFLStateEndpoint = value;
    }
    get getSleeperProjectionsEndpoint() {
        return this._getSleeperProjectionsEndpoint;
    }
    set getSleeperProjectionsEndpoint(value) {
        this._getSleeperProjectionsEndpoint = value;
    }
}
SleeperApiConfigService.ɵfac = function SleeperApiConfigService_Factory(t) { return new (t || SleeperApiConfigService)(); };
SleeperApiConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SleeperApiConfigService, factory: SleeperApiConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pxwm":
/*!********************************************************!*\
  !*** ./src/app/components/services/matchup.service.ts ***!
  \********************************************************/
/*! exports provided: MatchupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchupService", function() { return MatchupService; });
/* harmony import */ var _model_matchup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/matchup */ "2KAN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MatchupService {
    constructor() {
        this.scheduleComparison = [];
        this.weeklyComparison = [];
    }
    /**
     * initializes matchup data
     * @param selectedLeague
     */
    initMatchUpCharts(selectedLeague) {
        this.generateWeeklyRecords(selectedLeague);
        this.generateScheduleComparison(selectedLeague);
    }
    generateWeeklyRecords(selectedLeague) {
        if (this.weeklyComparison.length === 0) {
            for (let rosterId = 1; rosterId < selectedLeague.totalRosters + 1; rosterId++) {
                this.weeklyComparison.push(this.calculateWeeklyRecordsForTeam(selectedLeague, rosterId));
            }
        }
    }
    /**
     * generates schedule comparison
     * @param selectedLeague
     */
    generateScheduleComparison(selectedLeague) {
        if (this.scheduleComparison.length === 0) {
            for (let rosterId = 1; rosterId < selectedLeague.totalRosters + 1; rosterId++) {
                this.scheduleComparison.push(new _model_matchup__WEBPACK_IMPORTED_MODULE_0__["ScheduleComp"](rosterId, this.calculateScheduleForTeam(selectedLeague, rosterId)));
            }
        }
    }
    /**
     * calculates schedule comparison for team
     * @param selectedLeague
     * @param rosterId
     */
    calculateScheduleForTeam(selectedLeague, rosterId) {
        const schedule = {};
        for (let selectedRosterId = 1; selectedRosterId < selectedLeague.totalRosters + 1; selectedRosterId++) {
            let wins = 0;
            let losses = 0;
            let ties = 0;
            for (let week = selectedLeague.startWeek; week < selectedLeague.playoffStartWeek; week++) {
                let matchUpId = 0;
                let teamPoints = 0;
                let totalPoints = 0;
                if (selectedLeague.leagueMatchUps[week] !== undefined) {
                    for (let matchup of selectedLeague.leagueMatchUps[week]) {
                        totalPoints += matchup.points;
                        if (matchup.rosterId === selectedRosterId) {
                            matchUpId = matchup.matchupId;
                        }
                        if (matchup.rosterId === rosterId) {
                            teamPoints = matchup.points;
                        }
                    }
                    for (let opponent of selectedLeague.leagueMatchUps[week]) {
                        if (matchUpId === opponent.matchupId && opponent.rosterId !== selectedRosterId) {
                            if (opponent.points > teamPoints) {
                                losses++;
                            }
                            else if (opponent.points < teamPoints) {
                                wins++;
                            }
                            else if (teamPoints !== 0) {
                                if (opponent.rosterId == rosterId) {
                                    if (totalPoints / selectedLeague.totalRosters > teamPoints) {
                                        losses++;
                                    }
                                    else if (totalPoints / selectedLeague.totalRosters <= teamPoints) {
                                        wins++;
                                    }
                                }
                                else {
                                    ties++;
                                }
                            }
                            break;
                        }
                    }
                }
            }
            schedule[selectedRosterId] = [wins, losses, ties];
        }
        return schedule;
    }
    calculateWeeklyRecordsForTeam(selectedLeague, rosterId) {
        var _a, _b;
        const weeklyRecords = {};
        let totalWins = 0, totalLosses = 0, totalTies = 0;
        for (let week = selectedLeague.startWeek; week < selectedLeague.playoffStartWeek; week++) {
            let wins = 0, losses = 0, ties = 0;
            if (selectedLeague.leagueMatchUps[week] !== undefined) {
                const teamPoints = (_b = (_a = selectedLeague.leagueMatchUps[week]) === null || _a === void 0 ? void 0 : _a.filter(matchup => {
                    return matchup.rosterId === rosterId;
                })[0]) === null || _b === void 0 ? void 0 : _b.points;
                for (let matchup of selectedLeague.leagueMatchUps[week]) {
                    if (matchup.rosterId !== rosterId) {
                        if (matchup.points > teamPoints) {
                            totalLosses++;
                            losses++;
                        }
                        else if (matchup.points < teamPoints) {
                            totalWins++;
                            wins++;
                        }
                        else if (matchup.points !== 0 && teamPoints !== 0) {
                            totalTies++;
                            ties++;
                        }
                    }
                }
            }
            weeklyRecords[week] = [wins, losses, ties];
        }
        return new _model_matchup__WEBPACK_IMPORTED_MODULE_0__["WeeklyRecordComp"](rosterId, weeklyRecords, totalWins, totalLosses, totalTies);
    }
    getTeamName(col, teams) {
        for (let team of teams) {
            if (team.roster.rosterId == col) {
                return team.owner.teamName;
            }
        }
    }
    reset() {
        this.weeklyComparison = [];
        this.scheduleComparison = [];
    }
}
MatchupService.ɵfac = function MatchupService_Factory(t) { return new (t || MatchupService)(); };
MatchupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MatchupService, factory: MatchupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qwBd":
/*!*****************************************************!*\
  !*** ./src/app/components/draft/draft.component.ts ***!
  \*****************************************************/
/*! exports provided: DraftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftComponent", function() { return DraftComponent; });
/* harmony import */ var _base_component_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component.abstract */ "W5wg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sleeper.service */ "ebv/");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/player.service */ "QIP1");
/* harmony import */ var _services_mock_draft_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/mock-draft.service */ "1EFA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _draft_table_draft_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./draft-table/draft-table.component */ "RfqT");
/* harmony import */ var _completed_draft_table_completed_draft_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./completed-draft-table/completed-draft-table.component */ "05jv");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");














function DraftComponent_div_4_mat_optgroup_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-optgroup", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Mock Draft: ", ctx_r4.mockDraftService.teamPicks.length / ctx_r4.sleeperService.selectedLeague.totalRosters, " Rounds");
} }
function DraftComponent_div_4_mat_optgroup_6_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const draft_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", draft_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Draft: ", draft_r7.draft.season, " - ", draft_r7.draft.rounds, " Rounds");
} }
function DraftComponent_div_4_mat_optgroup_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-optgroup", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DraftComponent_div_4_mat_optgroup_6_mat_option_1_Template, 2, 3, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.sleeperService.completedDrafts);
} }
function DraftComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select a Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DraftComponent_div_4_Template_mat_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.selectedDraft = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DraftComponent_div_4_mat_optgroup_5_Template, 3, 1, "mat-optgroup", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DraftComponent_div_4_mat_optgroup_6_Template, 2, 1, "mat-optgroup", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.selectedDraft);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.mockDraftService.teamPicks.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.sleeperService.completedDrafts.length > 0);
} }
function DraftComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-draft-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DraftComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-completed-draft-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedDraft", ctx_r11.selectedDraft);
} }
function DraftComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DraftComponent_div_5_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DraftComponent_div_5_div_2_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedDraft == "upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedDraft && ctx_r1.selectedDraft !== "upcoming");
} }
function DraftComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Cannot find drafts. Please select a league.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Choose League");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DraftComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Cannot generate drafts. Please select a different year or league.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Choose Another League");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class DraftComponent extends _base_component_abstract__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"] {
    constructor(sleeperService, playersService, mockDraftService) {
        super();
        this.sleeperService = sleeperService;
        this.playersService = playersService;
        this.mockDraftService = mockDraftService;
    }
    ngOnInit() {
        if (this.sleeperService.selectedLeague && this.playersService.playerValues.length !== 0) {
            this.initServices();
        }
        else {
            this.playersService.loadPlayerValuesForToday();
        }
        this.addSubscriptions(this.playersService.$currentPlayerValuesLoaded.subscribe(() => {
            if (this.sleeperService.sleeperTeamDetails) {
                this.initServices();
            }
        }));
    }
    initServices() {
        var _a;
        this.mockDraftService.generateDraft(this.playersService.playerValues, this.sleeperService.selectedLeague.isSuperflex, (_a = this.sleeperService.upcomingDrafts[0]) === null || _a === void 0 ? void 0 : _a.playerType);
        this.mockDraftService.mapDraftObjects(this.sleeperService.sleeperTeamDetails);
        if (this.mockDraftService.teamPicks.length > 0) {
            this.selectedDraft = 'upcoming';
        }
    }
}
DraftComponent.ɵfac = function DraftComponent_Factory(t) { return new (t || DraftComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_2__["SleeperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mock_draft_service__WEBPACK_IMPORTED_MODULE_4__["MockDraftService"])); };
DraftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DraftComponent, selectors: [["app-draft"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 4, consts: [[1, "margin-top-10", "large-bold-header-text", "center-text"], [1, "center-text", "margin-top-10"], ["class", "grid-100 button-right margin-top-10", 4, "ngIf"], [4, "ngIf"], ["class", "center-text margin-top-50", 4, "ngIf"], [1, "grid-100", "button-right", "margin-top-10"], ["appearance", "outline"], [3, "ngModel", "ngModelChange"], ["label", "Upcoming", 4, "ngIf"], ["label", "Completed", 4, "ngIf"], ["label", "Upcoming"], ["value", "upcoming"], ["label", "Completed"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "margin-top-25", 4, "ngIf"], [1, "margin-top-25"], [3, "selectedDraft"], [1, "center-text", "margin-top-50"], [1, "warning__alert"], ["mat-raised-button", "", "color", "warn", "routerLink", "./home"]], template: function DraftComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Draft Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " View past drafts with current day values, or create a mock draft for upcoming draft with the new rookie class.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DraftComponent_div_4_Template, 7, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DraftComponent_div_5_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DraftComponent_div_6_Template, 6, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DraftComponent_div_7_Template, 6, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sleeperService.leagueLoaded && (ctx.mockDraftService.teamPicks.length > 0 || ctx.sleeperService.completedDrafts.length > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sleeperService.leagueLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.sleeperService.leagueLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mockDraftService.teamPicks.length == 0 && ctx.sleeperService.completedDrafts.length == 0 && ctx.sleeperService.leagueLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptgroup"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _draft_table_draft_table_component__WEBPACK_IMPORTED_MODULE_10__["DraftTableComponent"], _completed_draft_table_completed_draft_table_component__WEBPACK_IMPORTED_MODULE_11__["CompletedDraftTableComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmFmdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "tCif":
/*!***********************************************************************!*\
  !*** ./src/app/components/power-rankings/power-rankings.component.ts ***!
  \***********************************************************************/
/*! exports provided: PowerRankingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerRankingsComponent", function() { return PowerRankingsComponent; });
/* harmony import */ var _base_component_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component.abstract */ "W5wg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sleeper.service */ "ebv/");
/* harmony import */ var _services_power_rankings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/power-rankings.service */ "UNAG");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/player.service */ "QIP1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _power_rankings_chart_power_rankings_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./power-rankings-chart/power-rankings-chart.component */ "SpCN");
/* harmony import */ var _power_rankings_table_power_rankings_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./power-rankings-table/power-rankings-table.component */ "RVpf");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");










function PowerRankingsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-power-rankings-chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-power-rankings-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("powerRankings", ctx_r0.powerRankingService.powerRankings)("isSuperFlex", ctx_r0.sleeperService.selectedLeague.isSuperflex);
} }
function PowerRankingsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Cannot generate Power Rankings. Please select a league.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Choose League");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PowerRankingsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Error creating power rankings. Please select a different league.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Choose League");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PowerRankingsComponent extends _base_component_abstract__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"] {
    constructor(sleeperService, powerRankingService, playersService) {
        super();
        this.sleeperService = sleeperService;
        this.powerRankingService = powerRankingService;
        this.playersService = playersService;
    }
    ngOnInit() {
        if (this.sleeperService.leagueLoaded && this.playersService.playerValues.length !== 0) {
            this.powerRankingService.mapPowerRankings(this.sleeperService.sleeperTeamDetails, this.playersService.playerValues);
        }
        else {
            this.playersService.loadPlayerValuesForToday();
        }
        this.addSubscriptions(this.playersService.$currentPlayerValuesLoaded.subscribe(() => {
            if (this.sleeperService.sleeperTeamDetails) {
                this.powerRankingService.mapPowerRankings(this.sleeperService.sleeperTeamDetails, this.playersService.playerValues);
            }
        }));
    }
}
PowerRankingsComponent.ɵfac = function PowerRankingsComponent_Factory(t) { return new (t || PowerRankingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_2__["SleeperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_power_rankings_service__WEBPACK_IMPORTED_MODULE_3__["PowerRankingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"])); };
PowerRankingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PowerRankingsComponent, selectors: [["app-power-rankings"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 3, consts: [[1, "margin-top-10", "large-bold-header-text", "center-text"], [1, "center-text", "margin-top-10"], ["href", "https://keeptradecut.com/", "target", "_blank", 1, "info__alert"], [1, "info__alert"], [4, "ngIf"], ["class", "center-text margin-top-50", 4, "ngIf"], [3, "powerRankings", "isSuperFlex"], [1, "center-text", "margin-top-50"], [1, "warning__alert"], ["mat-raised-button", "", "color", "warn", "routerLink", "./home"]], template: function PowerRankingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Team Power Rankings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Team power rankings are determined by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "KeepTradeCut.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " value calculations taken from over ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "600,000+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " data points.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PowerRankingsComponent_div_10_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PowerRankingsComponent_div_11_Template, 6, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PowerRankingsComponent_div_12_Template, 6, 0, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sleeperService.leagueLoaded && ctx.powerRankingService.powerRankings.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.sleeperService.leagueLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sleeperService.leagueLoaded && ctx.powerRankingService.powerRankings.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _power_rankings_chart_power_rankings_chart_component__WEBPACK_IMPORTED_MODULE_6__["PowerRankingsChartComponent"], _power_rankings_table_power_rankings_table_component__WEBPACK_IMPORTED_MODULE_7__["PowerRankingsTableComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3dlci1yYW5raW5ncy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_power_rankings_power_rankings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/power-rankings/power-rankings.component */ "tCif");
/* harmony import */ var _components_player_values_player_values_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/player-values/player-values.component */ "zLtU");
/* harmony import */ var _components_draft_draft_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/draft/draft.component */ "qwBd");
/* harmony import */ var _components_playoff_calculator_playoff_calculator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/playoff-calculator/playoff-calculator.component */ "bfsi");
/* harmony import */ var _components_player_comparisons_player_comparisons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/player-comparisons/player-comparisons.component */ "cfV4");
/* harmony import */ var _components_player_details_player_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/player-details/player-details.component */ "Mg9l");
/* harmony import */ var _components_fantasy_team_details_fantasy_team_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/fantasy-team-details/fantasy-team-details.component */ "wrNJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const routes = [
    {
        path: 'players/values',
        component: _components_player_values_player_values_component__WEBPACK_IMPORTED_MODULE_3__["PlayerValuesComponent"]
    },
    {
        path: 'players/comparison',
        component: _components_player_comparisons_player_comparisons_component__WEBPACK_IMPORTED_MODULE_6__["PlayerComparisonsComponent"]
    },
    {
        path: 'players/details/:playerNameId',
        component: _components_player_details_player_details_component__WEBPACK_IMPORTED_MODULE_7__["PlayerDetailsComponent"]
    },
    {
        path: 'league/team/:ownerName',
        component: _components_fantasy_team_details_fantasy_team_details_component__WEBPACK_IMPORTED_MODULE_8__["FantasyTeamDetailsComponent"]
    },
    {
        path: 'league/rankings',
        component: _components_power_rankings_power_rankings_component__WEBPACK_IMPORTED_MODULE_2__["PowerRankingsComponent"]
    },
    {
        path: 'league/playoff/calculator',
        component: _components_playoff_calculator_playoff_calculator_component__WEBPACK_IMPORTED_MODULE_5__["PlayoffCalculatorComponent"]
    },
    {
        path: 'league/draft',
        component: _components_draft_draft_component__WEBPACK_IMPORTED_MODULE_4__["DraftComponent"]
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload', enableTracing: true })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wGn4":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/modals/add-player-comparison-modal/add-player-comparison-modal.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AddPlayerComparisonModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlayerComparisonModalComponent", function() { return AddPlayerComparisonModalComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/player.service */ "QIP1");
/* harmony import */ var _services_api_ktc_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api/ktc-api.service */ "BCR2");
/* harmony import */ var _services_player_comparison_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/player-comparison.service */ "Iwnn");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/sleeper.service */ "ebv/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");















function AddPlayerComparisonModalComponent_mat_chip_list_2_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function AddPlayerComparisonModalComponent_mat_chip_list_2_mat_chip_1_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const player_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.playerComparisonService.onRemove(player_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", player_r5.name, " ");
} }
function AddPlayerComparisonModalComponent_mat_chip_list_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPlayerComparisonModalComponent_mat_chip_list_2_mat_chip_1_Template, 4, 1, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.playerComparisonService.selectedPlayers);
} }
function AddPlayerComparisonModalComponent_mat_chip_list_3_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function AddPlayerComparisonModalComponent_mat_chip_list_3_mat_chip_1_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const player_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.playerComparisonService.onRemove(player_r9, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", player_r9.name, " ");
} }
function AddPlayerComparisonModalComponent_mat_chip_list_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPlayerComparisonModalComponent_mat_chip_list_3_mat_chip_1_Template, 4, 1, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.playerComparisonService.group2SelectedPlayers);
} }
function AddPlayerComparisonModalComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPlayerComparisonModalComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r12.playerSearch = ""; return ctx_r12.updatePlayerFilters(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddPlayerComparisonModalComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPlayerComparisonModalComponent_div_24_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const player_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.addPlayer(player_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", player_r14.position, " - ", player_r14.full_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", player_r14.team, " ", player_r14.position, "", player_r14.sf_position_rank, "");
} }
class AddPlayerComparisonModalComponent {
    constructor(playerService, ktcApiService, playerComparisonService, dialog, data, sleeperService) {
        this.playerService = playerService;
        this.ktcApiService = ktcApiService;
        this.playerComparisonService = playerComparisonService;
        this.dialog = dialog;
        this.data = data;
        this.sleeperService = sleeperService;
        this.playerSearch = '';
    }
    ngOnInit() {
        this.filterPosGroup = [true, true, true, true, true, false];
        this.filteredList = this.playerService.playerValues.slice(0, 7);
    }
    addPlayer(player) {
        let addable = true;
        if (this.playerComparisonService.isGroupMode && this.data.isGroup2) {
            for (let p of this.playerComparisonService.group2SelectedPlayers) {
                if (p.id === player.name_id) {
                    addable = false;
                }
            }
        }
        else {
            for (let p of this.playerComparisonService.selectedPlayers) {
                if (p.id === player.name_id) {
                    addable = false;
                }
            }
        }
        if (addable) {
            this.playerComparisonService.isGroupMode ? this.playerComparisonService.addPlayerToCharts(player, this.data.isGroup2) : this.playerComparisonService.addPlayerToCharts(player);
        }
    }
    onRemove(player, isGroup2 = false) {
        this.playerComparisonService.onRemove({ name: player.full_name, data: [], id: player.name_id }, isGroup2);
    }
    finishAdding() {
        this.dialog.closeAll();
    }
    updatePlayerFilters() {
        this.filteredList = this.playerService.playerValues.slice(0);
        const filterOptions = ['QB', 'RB', 'WR', 'TE', 'PI'];
        if (this.filterPosGroup[5]) {
            this.filteredList = this.filteredList.filter(player => {
                if (player.experience === 0 && player.position !== 'PI') {
                    return player;
                }
            });
        }
        for (let i = 0; i < this.filterPosGroup.length; i++) {
            if (!this.filterPosGroup[i]) {
                this.filteredList = this.filteredList.filter(player => {
                    if (player.position !== filterOptions[i]) {
                        return player;
                    }
                });
            }
        }
        if (!this.playerSearch || this.playerSearch === '') {
            this.filteredList = this.filteredList.slice(0, 7);
        }
        else {
            this.filteredList = this.filteredList.filter((player) => {
                var _a;
                return player.full_name.toLowerCase().includes(this.playerSearch.toLowerCase()) || player.position.toLowerCase().includes(this.playerSearch.toLowerCase())
                    || player.team.toLowerCase().includes(this.playerSearch.toLowerCase()) || (((_a = player.owner) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(this.playerSearch.toLowerCase())) && this.sleeperService.selectedLeague);
            }).slice(0, 7);
        }
    }
}
AddPlayerComparisonModalComponent.ɵfac = function AddPlayerComparisonModalComponent_Factory(t) { return new (t || AddPlayerComparisonModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_ktc_api_service__WEBPACK_IMPORTED_MODULE_3__["KTCApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_player_comparison_service__WEBPACK_IMPORTED_MODULE_4__["PlayerComparisonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_5__["SleeperService"])); };
AddPlayerComparisonModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddPlayerComparisonModalComponent, selectors: [["app-add-player-comparison-modal"]], decls: 28, vars: 12, consts: [[1, "large-bold-header-text", "center-text", "margin-bot-20"], [4, "ngIf"], [1, "margin-top-10"], [1, "mat-dropdown-wide-100-percent"], ["matInput", "", "autocomplete", "off", "type", "text", 3, "ngModel", "ngModelChange", "keyup"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["color", "primary", 1, "player-value-checkbox-margin", 3, "ngModel", "ngModelChange", "change"], ["class", "modal-players-list__item", 3, "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "accent", 1, "button-right", 3, "click"], [3, "removed", 4, "ngFor", "ngForOf"], [3, "removed"], ["matChipRemove", ""], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [1, "modal-players-list__item", 3, "click"], [1, "disabled__color"]], template: function AddPlayerComparisonModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Add/Remove Players");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddPlayerComparisonModalComponent_mat_chip_list_2_Template, 2, 1, "mat-chip-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddPlayerComparisonModalComponent_mat_chip_list_3_Template, 2, 1, "mat-chip-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPlayerComparisonModalComponent_Template_input_ngModelChange_8_listener($event) { return ctx.playerSearch = $event; })("keyup", function AddPlayerComparisonModalComponent_Template_input_keyup_8_listener() { return ctx.updatePlayerFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AddPlayerComparisonModalComponent_button_9_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPlayerComparisonModalComponent_Template_mat_checkbox_ngModelChange_11_listener($event) { return (ctx.filterPosGroup[0] = $event); })("change", function AddPlayerComparisonModalComponent_Template_mat_checkbox_change_11_listener() { return ctx.updatePlayerFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "QB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPlayerComparisonModalComponent_Template_mat_checkbox_ngModelChange_13_listener($event) { return (ctx.filterPosGroup[1] = $event); })("change", function AddPlayerComparisonModalComponent_Template_mat_checkbox_change_13_listener() { return ctx.updatePlayerFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "RB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPlayerComparisonModalComponent_Template_mat_checkbox_ngModelChange_15_listener($event) { return (ctx.filterPosGroup[2] = $event); })("change", function AddPlayerComparisonModalComponent_Template_mat_checkbox_change_15_listener() { return ctx.updatePlayerFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "WR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPlayerComparisonModalComponent_Template_mat_checkbox_ngModelChange_17_listener($event) { return (ctx.filterPosGroup[3] = $event); })("change", function AddPlayerComparisonModalComponent_Template_mat_checkbox_change_17_listener() { return ctx.updatePlayerFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "TE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPlayerComparisonModalComponent_Template_mat_checkbox_ngModelChange_19_listener($event) { return (ctx.filterPosGroup[4] = $event); })("change", function AddPlayerComparisonModalComponent_Template_mat_checkbox_change_19_listener() { return ctx.updatePlayerFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Picks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPlayerComparisonModalComponent_Template_mat_checkbox_ngModelChange_21_listener($event) { return (ctx.filterPosGroup[5] = $event); })("change", function AddPlayerComparisonModalComponent_Template_mat_checkbox_change_21_listener() { return ctx.updatePlayerFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Only Rookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AddPlayerComparisonModalComponent_div_24_Template, 4, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPlayerComparisonModalComponent_Template_button_click_26_listener() { return ctx.finishAdding(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.playerComparisonService.selectedPlayers.length !== 0 && (!ctx.playerComparisonService.isGroupMode || ctx.playerComparisonService.isGroupMode && !ctx.data.isGroup2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.playerComparisonService.group2SelectedPlayers.length !== 0 && (ctx.playerComparisonService.isGroupMode && ctx.data.isGroup2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Search Players by Name, Position, ", ctx.sleeperService.selectedLeague ? "NFL Team, or Fantasy Owner" : "or NFL Team", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.playerSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.playerSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filterPosGroup[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filterPosGroup[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filterPosGroup[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filterPosGroup[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filterPosGroup[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filterPosGroup[5]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipRemove"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcGxheWVyLWNvbXBhcmlzb24tbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "wrNJ":
/*!***********************************************************************************!*\
  !*** ./src/app/components/fantasy-team-details/fantasy-team-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FantasyTeamDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FantasyTeamDetailsComponent", function() { return FantasyTeamDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_sleeper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/sleeper.service */ "ebv/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_power_rankings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/power-rankings.service */ "UNAG");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/player.service */ "QIP1");
/* harmony import */ var _services_player_comparison_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/player-comparison.service */ "Iwnn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _fantasy_team_details_weekly_points_chart_fantasy_team_details_weekly_points_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fantasy-team-details-weekly-points-chart/fantasy-team-details-weekly-points-chart.component */ "8/9n");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













const _c0 = function (a1) { return ["../../../players/details", a1]; };
function FantasyTeamDetailsComponent_div_0_div_71_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 34, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function FantasyTeamDetailsComponent_div_0_div_71_mat_card_1_Template_img_error_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r6.hidden = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Trade Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-actions", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Player Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FantasyTeamDetailsComponent_div_0_div_71_mat_card_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const player_r5 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.openPlayerComparison(player_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "View Comparison");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r5 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r5 == null ? null : player_r5.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", player_r5.position, " ", player_r5.age != -1 ? player_r5.age : "??", " y.o.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://sleepercdn.com/content/nfl/players/thumb/" + (player_r5 == null ? null : player_r5.sleeper_id) + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("hidden", _r6.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r5 == null ? null : player_r5.sf_trade_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, player_r5.name_id));
} }
function FantasyTeamDetailsComponent_div_0_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FantasyTeamDetailsComponent_div_0_div_71_mat_card_1_Template, 18, 9, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.roster);
} }
const _c1 = function () { return ["../../rankings"]; };
const _c2 = function () { return ["../../playoff/calculator"]; };
function FantasyTeamDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Power Rankings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " View in Standings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "img", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function FantasyTeamDetailsComponent_div_0_Template_img_error_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return _r2.hidden = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Starter Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Overall Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Average Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Points For");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Max Points For");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-tab-group", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-tab", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Weekly Points Vs. Opponents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "app-fantasy-team-details-weekly-points-chart", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-tab", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Team Roster");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Below are the players sorted by most valuable to least valuable.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, FantasyTeamDetailsComponent_div_0_div_71_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedTeam.owner.ownerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://sleepercdn.com/avatars/thumbs/" + ctx_r0.selectedTeam.owner.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("hidden", _r2.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Team ", ctx_r0.selectedTeam.owner.teamName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Managed by ", ctx_r0.selectedTeam.owner.ownerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.powerRankingsService.getRankByTeam(ctx_r0.selectedTeam, "starterRank"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.powerRankingsService.getRankByTeam(ctx_r0.selectedTeam, "overallRank"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getAveragePoints());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedTeam.roster.teamMetrics.fpts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedTeam.roster.teamMetrics.ppts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.selectedTeam.roster.teamMetrics.wins, "-", ctx_r0.selectedTeam.roster.teamMetrics.losses, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Below is the ", ctx_r0.sleeperService.selectedYear, " Season match ups vs opponents. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedTeam", ctx_r0.selectedTeam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.roster.length > 0);
} }
function FantasyTeamDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cannot fetch team information. Please select a league.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose League");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FantasyTeamDetailsComponent {
    constructor(sleeperService, route, powerRankingsService, playerService, playerComparisonService, router) {
        this.sleeperService = sleeperService;
        this.route = route;
        this.powerRankingsService = powerRankingsService;
        this.playerService = playerService;
        this.playerComparisonService = playerComparisonService;
        this.router = router;
        this.roster = [];
    }
    ngOnInit() {
        const ownerName = this.route.snapshot.paramMap.get('ownerName');
        if (this.sleeperService.leagueLoaded) {
            const teamIndex = this.sleeperService.sleeperTeamDetails.map(e => e.owner.ownerName).indexOf(ownerName);
            this.selectedTeam = this.sleeperService.sleeperTeamDetails[teamIndex];
            this.powerRankingsService.mapPowerRankings(this.sleeperService.sleeperTeamDetails, this.playerService.playerValues);
            for (let sleeperId of this.selectedTeam.roster.players) {
                const player = this.playerService.getPlayerBySleeperId(sleeperId);
                if (player) {
                    this.roster.push(player);
                }
            }
            this.roster.sort((a, b) => {
                if (this.sleeperService.selectedLeague.isSuperflex) {
                    return b.sf_trade_value - a.sf_trade_value;
                }
                else {
                    return b.trade_value - a.trade_value;
                }
            });
        }
    }
    getAveragePoints() {
        return Math.round(this.selectedTeam.roster.teamMetrics.fpts / (this.sleeperService.selectedLeague.playoffStartWeek - this.sleeperService.selectedLeague.startWeek));
    }
    openPlayerComparison(selectedPlayer) {
        this.playerComparisonService.addPlayerToCharts(selectedPlayer);
        this.router.navigateByUrl('players/comparison');
    }
}
FantasyTeamDetailsComponent.ɵfac = function FantasyTeamDetailsComponent_Factory(t) { return new (t || FantasyTeamDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sleeper_service__WEBPACK_IMPORTED_MODULE_1__["SleeperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_power_rankings_service__WEBPACK_IMPORTED_MODULE_3__["PowerRankingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_player_comparison_service__WEBPACK_IMPORTED_MODULE_5__["PlayerComparisonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
FantasyTeamDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FantasyTeamDetailsComponent, selectors: [["app-fantasy-team-details"]], decls: 2, vars: 2, consts: [["class", "table-container", 4, "ngIf"], ["class", "center-text margin-top-50", 4, "ngIf"], [1, "table-container"], [1, "margin-top-10"], [1, "link--text__no__underline", "mid-bold-text", 2, "padding-right", "3px", 3, "routerLink"], [1, "arrow-icon__nav"], [1, "mid-bold-text"], [1, "link--text__no__underline", "mid-bold-text", "button-right", 3, "routerLink"], [1, "flex-start-container", "margin-top-50"], [1, "flex-item-home", "grid-15"], [1, "profile--pic"], [1, "responsive", 3, "src", "hidden", "error"], ["image", ""], [1, "flex-item-home", "grid-70"], [1, "large-bold-header-text"], [2, "padding-right", "15px"], [1, "standings-row"], [1, "standings-col", "vertical-break__right__dark"], [1, "small-text__light", "text__light", "disabled__color"], [1, "standings-col"], [1, "button-right", "center-text"], [1, "text__light", 2, "padding-right", "10px", "padding-left", "10px"], ["mat-align-tabs", "center", 1, "margin-top-25"], ["label", "Weekly MatchUps"], [1, "mid-bold-text", "margin-top-10", "center-text"], [1, "margin-top-10", "center-text"], [3, "selectedTeam"], ["label", "Roster"], [1, "content"], ["fxLayout", "row wrap", "fxLayoutAlign", "center", "class", "margin-top-50", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center", 1, "margin-top-50"], ["fxFlex", "25%", "fxFlex.xs", "100%", "fxFlex.sm", "33%", "class", "item mat-elevation-z4", 4, "ngFor", "ngForOf"], ["fxFlex", "25%", "fxFlex.xs", "100%", "fxFlex.sm", "33%", 1, "item", "mat-elevation-z4"], [1, "small-text__light"], ["mat-card-image", "", 1, "responsive", "center-img", 2, "max-width", "300px", 3, "src", "hidden", "error"], [1, "center-text"], ["mat-button", "", 3, "routerLink"], ["mat-button", "", 3, "click"], [1, "center-text", "margin-top-50"], [1, "warning__alert"], ["mat-raised-button", "", "color", "warn", "routerLink", "./home"]], template: function FantasyTeamDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FantasyTeamDetailsComponent_div_0_Template, 72, 19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FantasyTeamDetailsComponent_div_1_Template, 6, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sleeperService.leagueLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sleeperService.leagueLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _fantasy_team_details_weekly_points_chart_fantasy_team_details_weekly_points_chart_component__WEBPACK_IMPORTED_MODULE_10__["FantasyTeamDetailsWeeklyPointsChartComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]], styles: [".responsive[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.profile--pic[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  \r\n  \r\n}\r\n\r\n.icon--break[_ngcontent-%COMP%] {\r\n  vertical-align: baseline;\r\n  font-size: 10px;\r\n}\r\n\r\n.standings-row[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%; \r\n  \r\n  border-spacing: 10px; \r\n}\r\n\r\n.standings-col[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n.content[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]{\r\n  margin-bottom: 16px;\r\n  margin-right: 16px;\r\n}\r\n\r\n.center-img[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbnRhc3ktdGVhbS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXLEVBQUUsV0FBVztFQUN4QixvQ0FBb0M7RUFDcEMsb0JBQW9CLEVBQUUsV0FBVztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1oiLCJmaWxlIjoiZmFudGFzeS10ZWFtLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNwb25zaXZlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5wcm9maWxlLS1waWMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAvKm1heC13aWR0aDogMjAwMHB4OyovXHJcbiAgLyptYXgtaGVpZ2h0OiAyMDAwcHg7Ki9cclxufVxyXG5cclxuLmljb24tLWJyZWFrIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uc3RhbmRpbmdzLXJvdyB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7IC8qT3B0aW9uYWwqL1xyXG4gIC8qdGFibGUtbGF5b3V0OiBmaXhlZDsgISpPcHRpb25hbCohKi9cclxuICBib3JkZXItc3BhY2luZzogMTBweDsgLypPcHRpb25hbCovXHJcbn1cclxuXHJcbi5zdGFuZGluZ3MtY29sIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgLypwYWRkaW5nOiAxNnB4OyovXHJcbn1cclxuXHJcbi5jb250ZW50ID4gbWF0LWNhcmQge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLml0ZW17XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5jZW50ZXItaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "yQ9t":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/components/player-details/player-details-weekly-box-scores-table/player-details-weekly-box-scores-table.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: PlayerDetailsWeeklyBoxScoresTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDetailsWeeklyBoxScoresTableComponent", function() { return PlayerDetailsWeeklyBoxScoresTableComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/player.service */ "QIP1");




function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r47 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getDisplayWeek(i_r47));
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fantasy Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r48 == null ? null : gamelog_r48.pts_half_ppr) || "---");
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Off Snp %");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (gamelog_r49 == null ? null : gamelog_r49.off_snp) || (gamelog_r49 == null ? null : gamelog_r49.snp) || 0, "%");
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Pass Att");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r50 == null ? null : gamelog_r50.pass_att) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Pass Cmp");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r51 == null ? null : gamelog_r51.pass_cmp) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Pass Yards");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r52 == null ? null : gamelog_r52.pass_yd) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Pass TDs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r53 == null ? null : gamelog_r53.pass_td) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Pass Ints");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r54 == null ? null : gamelog_r54.pass_int) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rush Att");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r55 == null ? null : gamelog_r55.rush_att) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rush Yds");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r56 == null ? null : gamelog_r56.rush_yd) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rush YPA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r57 == null ? null : gamelog_r57.rush_ypa) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rush TDs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r58 == null ? null : gamelog_r58.rush_td) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sacks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r59 == null ? null : gamelog_r59.pass_sack) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sack Yds");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r60 == null ? null : gamelog_r60.pass_sack_yds) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fumbles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r61 == null ? null : gamelog_r61.fum) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fumbles Lost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r62 == null ? null : gamelog_r62.fum_lost) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rec");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r63 == null ? null : gamelog_r63.rec) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rec Targets");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r64 == null ? null : gamelog_r64.rec_tgt) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rec Yd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r65 == null ? null : gamelog_r65.rec_yd) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rec YPR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r66 == null ? null : gamelog_r66.rec_ypr) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rec TD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r67 == null ? null : gamelog_r67.rec_td) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rec RZ T");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamelog_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((gamelog_r68 == null ? null : gamelog_r68.rec_rz_tgt) || 0);
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_row_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function PlayerDetailsWeeklyBoxScoresTableComponent_mat_row_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row", 28);
} }
class PlayerDetailsWeeklyBoxScoresTableComponent {
    constructor(playerService) {
        this.playerService = playerService;
        this.generalBoxScore = ['week', 'points', 'off_snp'];
        this.passingBoxScore = ['pass_att', 'pass_cmp', 'pass_yd', 'pass_td', 'pass_int'];
        this.rushingBoxScore = ['rush_att', 'rush_yd', 'rush_ypa', 'rush_td'];
        this.sackBoxScore = ['pass_sack', 'pass_sack_yds'];
        this.turnoverBoxScore = ['fum', 'fum_lost'];
        this.receivingBoxScore = ['rec', 'rec_tgt', 'rec_yd', 'rec_ypr', 'rec_td', 'rec_rz_tgt'];
        this.displayedColumns = [];
        this.playerWeeklyStats = [];
        this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.setDisplayColumns();
        for (let i = 1; i < 19; i++) {
            const weekStats = this.playerService.pastSeasonWeeklyStats[i];
            this.playerWeeklyStats.push(weekStats[this.selectedPlayer.sleeper_id]);
        }
        this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.playerWeeklyStats);
    }
    setDisplayColumns() {
        switch (this.selectedPlayer.position) {
            case 'QB':
                this.displayedColumns = this.displayedColumns.concat(this.generalBoxScore, this.passingBoxScore, this.rushingBoxScore, this.sackBoxScore, this.turnoverBoxScore);
                break;
            case 'RB':
                this.displayedColumns = this.displayedColumns.concat(this.generalBoxScore, this.rushingBoxScore, this.receivingBoxScore, this.turnoverBoxScore);
                break;
            case 'WR':
                this.displayedColumns = this.displayedColumns.concat(this.generalBoxScore, this.receivingBoxScore, this.turnoverBoxScore);
                break;
            default:
                this.displayedColumns = this.displayedColumns.concat(this.generalBoxScore, this.receivingBoxScore, this.turnoverBoxScore);
        }
    }
    getDisplayWeek(i) {
        return this.playerService.getWeekByIndex(i + 1).slice(5);
    }
}
PlayerDetailsWeeklyBoxScoresTableComponent.ɵfac = function PlayerDetailsWeeklyBoxScoresTableComponent_Factory(t) { return new (t || PlayerDetailsWeeklyBoxScoresTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"])); };
PlayerDetailsWeeklyBoxScoresTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlayerDetailsWeeklyBoxScoresTableComponent, selectors: [["app-player-details-weekly-box-scores-table"]], inputs: { selectedPlayer: "selectedPlayer" }, decls: 70, vars: 3, consts: [[1, "margin-top-50"], [1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "week"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "points"], ["matColumnDef", "off_snp"], ["matColumnDef", "pass_att"], ["matColumnDef", "pass_cmp"], ["matColumnDef", "pass_yd"], ["matColumnDef", "pass_td"], ["matColumnDef", "pass_int"], ["matColumnDef", "rush_att"], ["matColumnDef", "rush_yd"], ["matColumnDef", "rush_ypa"], ["matColumnDef", "rush_td"], ["matColumnDef", "pass_sack"], ["matColumnDef", "pass_sack_yds"], ["matColumnDef", "fum"], ["matColumnDef", "fum_lost"], ["matColumnDef", "rec"], ["matColumnDef", "rec_tgt"], ["matColumnDef", "rec_yd"], ["matColumnDef", "rec_ypr"], ["matColumnDef", "rec_td"], ["matColumnDef", "rec_rz_tgt"], [4, "matHeaderRowDef"], ["class", "box-score-element-row", 4, "matRowDef", "matRowDefColumns"], [1, "box-score-element-row"]], template: function PlayerDetailsWeeklyBoxScoresTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_4_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_7_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_10_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_13_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_16_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_19_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](20, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_22_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](23, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_25_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](26, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_28_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](29, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_30_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_31_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](32, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_33_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_34_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](35, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_36_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_37_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](38, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_39_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_40_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](41, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_42_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_43_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](44, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_45_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_46_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](47, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_48_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_49_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](50, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_51_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_52_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](53, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_54_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_55_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](56, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_57_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_58_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](59, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_60_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_61_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](62, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_63_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_64_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](65, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_cell_66_Template, 2, 0, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, PlayerDetailsWeeklyBoxScoresTableComponent_mat_cell_67_Template, 2, 1, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, PlayerDetailsWeeklyBoxScoresTableComponent_mat_header_row_68_Template, 1, 0, "mat-header-row", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, PlayerDetailsWeeklyBoxScoresTableComponent_mat_row_69_Template, 1, 0, "mat-row", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.datasource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: [".mat-row[_ngcontent-%COMP%]:nth-child(even){\r\n  background-color: #373737;\r\n}\r\n\r\n.box-score-element-row[_ngcontent-%COMP%]:hover {\r\n  background: #577380;\r\n}\r\n\r\n.box-score-element-row[_ngcontent-%COMP%]:active {\r\n  background: #577380;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci1kZXRhaWxzLXdlZWtseS1ib3gtc2NvcmVzLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoicGxheWVyLWRldGFpbHMtd2Vla2x5LWJveC1zY29yZXMtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcm93Om50aC1jaGlsZChldmVuKXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczNzM3O1xyXG59XHJcblxyXG4uYm94LXNjb3JlLWVsZW1lbnQtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTc3MzgwO1xyXG59XHJcblxyXG4uYm94LXNjb3JlLWVsZW1lbnQtcm93OmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogIzU3NzM4MDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "ynWM":
/*!****************************************!*\
  !*** ./src/app/model/SleeperLeague.ts ***!
  \****************************************/
/*! exports provided: TeamMetrics, SleeperRosterData, SleeperOwnerData, SleeperTeam, SleeperRawDraftOrderData, SleeperRawTradePicksData, SleeperTeamMatchUpData, SleeperCompletedPickData, SleeperStateOfNFL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMetrics", function() { return TeamMetrics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleeperRosterData", function() { return SleeperRosterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleeperOwnerData", function() { return SleeperOwnerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleeperTeam", function() { return SleeperTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleeperRawDraftOrderData", function() { return SleeperRawDraftOrderData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleeperRawTradePicksData", function() { return SleeperRawTradePicksData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleeperTeamMatchUpData", function() { return SleeperTeamMatchUpData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleeperCompletedPickData", function() { return SleeperCompletedPickData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleeperStateOfNFL", function() { return SleeperStateOfNFL; });
class TeamMetrics {
    constructor(settings) {
        this.wins = settings.wins || 0;
        this.waiverPosition = settings.waiver_position || 0;
        this.ppts = settings.ppts + (settings.ppts_decimal / 100) || 0;
        this.losses = settings.losses || 0;
        this.fpts = settings.fpts + (settings.fpts_decimal / 100) || 0;
        this.fptsAgainst = settings.fpts_against + (settings.fpts_against_decimal / 100) || 0;
        this.division = settings.division || 0;
        this.ties = settings.ties || 0;
        this.rank = settings.rank || 0;
    }
}
class SleeperRosterData {
    constructor(roster_id, owner_id, players, settings) {
        this.rosterId = roster_id;
        this.ownerId = owner_id;
        this.players = players;
        this.teamMetrics = settings;
    }
}
class SleeperOwnerData {
    constructor(user_id, display_name, team_name, avatar) {
        this.userId = user_id;
        this.ownerName = display_name;
        this.teamName = team_name || display_name;
        this.avatar = avatar;
    }
}
class SleeperTeam {
    constructor(owner, roster) {
        this.draftCapital = [];
        this.owner = owner;
        this.roster = roster;
    }
}
class SleeperRawDraftOrderData {
    constructor(draft_id, league_id, status, type, draft_order, slot_to_roster_id, year, settings) {
        this.draftId = draft_id;
        this.leagueId = league_id;
        this.status = status;
        this.type = type;
        this.draftOrder = draft_order;
        this.slotToRosterId = slot_to_roster_id;
        this.rounds = settings.rounds;
        this.season = year;
        this.playerType = settings.player_type;
    }
}
class SleeperRawTradePicksData {
    constructor(owner_id, previous_owner_id, roster_id, round, season) {
        this.ownerId = owner_id;
        this.previousOwnerId = previous_owner_id;
        this.rosterId = roster_id;
        this.round = round;
        this.season = season;
    }
}
class SleeperTeamMatchUpData {
    constructor(matchup) {
        this.starterPoints = matchup.starters_points;
        this.starters = matchup.starters;
        this.rosterId = matchup.roster_id;
        this.points = matchup.points;
        this.players = matchup.players;
        this.matchupId = matchup.matchup_id;
        this.customPoints = matchup.custom_points;
    }
}
class SleeperCompletedPickData {
    constructor(pick) {
        this.round = pick.round;
        this.draftSlot = pick.draft_slot;
        this.sleeperId = pick.player_id;
        this.isKeeper = pick.is_keeper;
        this.rosterId = pick.roster_id;
        this.pickNumber = pick.pick_no;
        this.draftId = pick.draft_id;
        this.firstName = pick.metadata.first_name;
        this.lastName = pick.metadata.last_name;
        this.position = pick.metadata.position;
    }
}
class SleeperStateOfNFL {
    constructor(season) {
        this.week = season.week;
        this.season = season.season;
        this.previousSeason = season.previous_season;
        this.seasonType = season.season_type;
    }
}


/***/ }),

/***/ "zLtU":
/*!*********************************************************************!*\
  !*** ./src/app/components/player-values/player-values.component.ts ***!
  \*********************************************************************/
/*! exports provided: PlayerValuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerValuesComponent", function() { return PlayerValuesComponent; });
/* harmony import */ var _base_component_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component.abstract */ "W5wg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/player.service */ "QIP1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ktc_table_ktc_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ktc-table/ktc-table.component */ "1P4D");





function PlayerValuesComponent_app_ktc_table_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-ktc-table", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("players", ctx_r0.playerService.playerValues);
} }
class PlayerValuesComponent extends _base_component_abstract__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"] {
    constructor(playerService) {
        super();
        this.playerService = playerService;
    }
    ngOnInit() {
        this.playersLoaded = (this.playerService.playerValues.length > 0);
        this.playerService.loadPlayerValuesForToday();
        this.addSubscriptions(this.playerService.$currentPlayerValuesLoaded.subscribe(() => {
            this.playersLoaded = true;
        }));
    }
}
PlayerValuesComponent.ɵfac = function PlayerValuesComponent_Factory(t) { return new (t || PlayerValuesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"])); };
PlayerValuesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlayerValuesComponent, selectors: [["app-player-values"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 1, consts: [[1, "margin-top-10", "large-bold-header-text", "center-text"], [1, "center-text", "margin-top-10"], ["href", "https://keeptradecut.com/", "target", "_blank", 1, "info__alert"], [1, "info__alert"], [1, "margin-top-25"], [3, "players", 4, "ngIf"], [3, "players"]], template: function PlayerValuesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Today's Player Values");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Player values are scraped from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "KeepTradeCut.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " dynasty rankings calculated from over ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "600,000+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " data points. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "The scoring is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "0.5 PPR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, ", the table below will update depending on whether your league is Superflex or not.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PlayerValuesComponent_app_ktc_table_16_Template, 1, 1, "app-ktc-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.playersLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ktc_table_ktc_table_component__WEBPACK_IMPORTED_MODULE_4__["KtcTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5ZXItdmFsdWVzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "zSQ3":
/*!***************************************************!*\
  !*** ./src/app/components/model/powerRankings.ts ***!
  \***************************************************/
/*! exports provided: TeamPowerRanking, PositionPowerRanking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPowerRanking", function() { return TeamPowerRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionPowerRanking", function() { return PositionPowerRanking; });
class TeamPowerRanking {
    constructor(team, players, sfTradeValue, tradeValue, picks) {
        this.starters = [];
        this.sfTradeValueOverall = 0;
        this.tradeValueOverall = 0;
        this.sfTradeValueStarter = 0;
        this.tradeValueStarter = 0;
        this.team = team;
        this.roster = players;
        this.sfTradeValueOverall = sfTradeValue;
        this.tradeValueOverall = tradeValue;
        this.picks = picks;
    }
}
class PositionPowerRanking {
    constructor(pos, sfTradeValue, tradeValue, groupList) {
        this.sfTradeValue = sfTradeValue;
        this.tradeValue = tradeValue;
        this.players = groupList;
        this.position = pos;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map