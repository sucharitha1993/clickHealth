interface AppLitterals {
    timings: any,
    mobile: string,
    email: string,
    required: string
}

export const AppLitteralsConfig: AppLitterals = {
    mobile: 'Please enter valid mobile number.',
    email: 'Please enter valid email.',
    required: 'This field is required.',
    timings: {
        'morning': [
            '10:00 AM',
            '10:30 AM',
            '11:00 AM',
            '11:30 AM',
            '12:00 PM',
            '12:30 PM'
        ],
        'aftrn': [
            '1:00 PM',
            '1:30 PM',
            '2:00 PM',
            '2:30 PM',
            '3:00 PM',
            '3:30 PM'
        ],
        'eveng': [
            '5:00 PM',
            '5:30 PM',
            '6:00 PM',
            '6:30 PM',
            '7:00 PM',
            '7:30 PM'
        ]
    }

}