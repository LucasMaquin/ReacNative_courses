export function condition(condition) {

    const conditionArrays = [
        { id: 'storm', name: 'rainy-outline', color: '#1ec9ff' },
        { id: 'snow', name: 'snow-outline', color: '#1ec9ff' },
        { id: 'clear_day', name: 'sunny-outline', color: '#ffb300' },
        { id: 'cloudly_day', name: 'partly-sunny-outline', color: '#ffb300' },
        { id: 'clear_night', name: 'nightlight-round', color: '#1ec9ff' },
        { id: 'rain', name: 'rainy-outline', color: '#1ec9ff' },
        { name: 'cloud-outline', color: '#1ec9ff' }
    ]

    for (let i = 0; i < conditionArrays.length; i++) {
        if (conditionArrays[i].id === condition) return conditionArrays[i];
    }

    return conditionArrays[conditionArrays.length-1];

}