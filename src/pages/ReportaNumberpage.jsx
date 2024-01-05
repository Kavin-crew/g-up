import { Autocomplete, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { DatePicker } from '@mui/x-date-pickers';

function ReportaNumberpage() {
    return (
        <form className="form">
            <div className="form__row">
                <div className="form__field">
                    <label htmlFor="gcash-reference-number">
                        Gcash Reference Number <small>*</small>
                    </label>
                    <TextField placeholder="019149841981981" required id="gcash-reference-number" />
                </div>
                <div className="form__field">
                    <label htmlFor="gcash-number">
                        Gcash Number <small>*</small>
                    </label>
                    <TextField placeholder="09123456789" required id="gcash-number" />
                </div>
                <div className="form__field">
                    <label htmlFor="gcash-name">
                        Gcash Name <small>*</small>
                    </label>
                    <TextField placeholder="Rh***n V." required id="gcash-name" />
                </div>
            </div>
            <div className="form__row">
                <div className="form__field">
                    <label htmlFor="category">
                        Category <small>*</small>
                    </label>
                    <Autocomplete id="category" disablePortal options={commonIssue} renderInput={(params) => <TextField {...params} label="" />} />
                </div>
                <div className="form__field">
                    <label htmlFor="amount">
                        Amount <small>*</small>
                    </label>
                    <TextField
                        id="amount"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Php</InputAdornment>,
                        }}
                    />
                </div>
                <div className="form__field">
                    <label htmlFor="date">
                        Date <small>*</small>
                    </label>
                    <DatePicker id="date" />
                </div>
            </div>
            <div className="form__row form__row--report">
                <label htmlFor="gcash-explanation">
                    Incident Report <small>*</small>
                </label>
                <TextField fullWidth id="gcash-explanation" placeholder="Explain here..." multiline maxRows={4} rows={8} />
            </div>
            <div className="form__row form__row--report">
                <label htmlFor="gcash-explanation">
                    Evidence (Proof of Pictures) <small>*</small>
                </label>
            </div>
            <button className="btn btn-secondary">Submit for Approval</button>
        </form>
    );
}

// temporary add data for dropdown
const commonIssue = [{ label: 'Online Transactions' }, { label: 'Online Games Transaction' }];

export default ReportaNumberpage;
