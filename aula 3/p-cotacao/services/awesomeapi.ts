let baseUrl = 'https://economia.awesomeapi.com.br/json';

export const getUSD = async () => {
    try {
        let url = baseUrl + '/last/USD-BRL';
        const req = await fetch(url);
        const json = await req.json();

        if (json.USDBRL) {
            return parseFloat(json.USDBRL.ask);
        }

        return 0;
    } catch (error) {
        return 0;
    }
}

export const getEUR = async () => {
    try {
        let url = baseUrl + '/last/EUR-BRL';
        const req = await fetch(url);
        const json = await req.json();

        if (json.EURBRL) {
            return parseFloat(json.EURBRL.ask);
        }

        return 0;
    } catch (error) {
        return 0;
    }
}