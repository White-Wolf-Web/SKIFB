import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function useTranslationReady() {
    const { i18n } = useTranslation();
    const [isReady, setIsReady] = useState(i18n?.isInitialized || false);

    useEffect(() => {
        if (!i18n) return;

        const handleInitialization = () => setIsReady(true);

        if (!isReady) {
            i18n.on('initialized', handleInitialization);
        }

        return () => {
            i18n.off('initialized', handleInitialization);
        };
    }, [i18n, isReady]);

    return isReady;
}
