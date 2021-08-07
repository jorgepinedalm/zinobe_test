import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddLoan } from './loan.actions';
import { LoanStateModel } from './loan.model';

@State({
  name: 'loans',
  defaults: {
    loans: []
  }
})
export class LoansState {
  @Selector()
  static getLoans(state: LoanStateModel) { return state.loans; }

  // Añade un nuevo prestamo al estado
  @Action(AddLoan)
  add({ getState, patchState }: StateContext<LoanStateModel>, { payload }: AddLoan) {
    const state = getState();
    patchState({
      loans: [...state.loans, payload]
    });
  }
}
