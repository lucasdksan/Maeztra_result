export const useNewsletter = {
    masterDataUrl: "", // Url para master Data

    popUp: function(email: string) {
        const masterDataUrl = this.masterDataUrl;
        const verifyEmail = this.textAlert(false, email, true);
        const validateEmail = function (email: string) {
            var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
            return re.test(email);
        };

        if(verifyEmail){
            this.errorAlert(verifyEmail);
        } else if(validateEmail(email)){
            this.errorAlert('E-mail Inválido');
        } else {
            this.successAlert('Você está registrado.');
        }
    },

    newsletter: function(email: string) {
        const masterDataUrl = this.masterDataUrl;
        const verifyEmail = this.textAlert(false, email, true);
        const Cookies = {
            expires: function () {
                return localStorage.getItem("@maeztra-expires");
            },

            setExpires: function () {
                localStorage.setItem("@maeztra-expires", 'true');
            }
        }
        const validateEmail = function (email: string) {
            var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
            return re.test(email);
        };

        if(verifyEmail){
            this.errorAlert(verifyEmail);
        } else if(validateEmail(email)){
            this.errorAlert('E-mail Inválido');
        } else {
            Cookies.setExpires();
            this.successAlert('Você está registrado.');
        }

    },

    textAlert: function (emailRegisted = false, emailText: string, confirm: boolean) {
        const text1 = 'Insira uma parte depois de "@"';
        const text2 = 'Insira uma parte seguida por "@"';
        const textEmailRegisted = `Este e-mail já está cadastrado`;

        const [first, second] = emailText.split('@');
        const verify = emailText.indexOf('@');

        if (confirm) {
            if (emailRegisted) {
                return textEmailRegisted;
            }
            else if (verify < 0) {
                return `Inclua um "@" no endereço do e-mail. "${emailText}" está com um "@" faltando.`;
            } else if (first == '') {
                return `${text2}. "${emailText}" está incompleto.`;
            } else if (second == '') {
                return `${text1}. "${emailText}" está incompleto.`;
            } else {
                return false;
            }
        }
    },

    clickNewsletter: function(value: string) {
        this.newsletter(value);
    },

    clickPopUp: function(value: string) {
        this.popUp(value);
    },

    errorAlert: function(value: string){
        alert(`Aconteceu um erro durante o processo: ${value}`);
    },

    successAlert: function(value: string){
        alert(`Parabéns: ${value}`);
    }
};