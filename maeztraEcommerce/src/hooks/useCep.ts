export const useCep = {
    identify: function (cep: string) {
        const regionIdentify = (val: number) => {
            switch (val) {
                case 1:
                    return '200,00';
                    break;
                case 2:
                    return '250,00';
                    break;
                case 3:
                    return '50,00';
                    break;
                case 4:
                    return '150,00';
                    break;
                case 5:
                    return '100,00';
                    break;
                case 6:
                    return '0,00';
                    break;
                case 7:
                    return '250,00';
                    break;
                case 8:
                    return '20,00';
                    break;
                case 9:
                    return '1,50';
                    break;
                default:
                    return '0,00';
                    break;
            }
        }

        if (cep.indexOf('-') !== -1) {
            const firtNumber = Number(cep[0]);
            const valueDis = regionIdentify(firtNumber);

            return valueDis;
        }
    }
};