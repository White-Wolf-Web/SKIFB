import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function useTranslationReady() {
    const { i18n } = useTranslation();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (i18n.isInitialized) {
            setIsReady(true);
        } else {
            i18n.on('initialized', () => setIsReady(true));
        }
    }, [i18n]);

    return isReady;
}
