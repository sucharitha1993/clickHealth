interface AppLitterals {
    mobile: string,
    email: string,
    required: string,
    toastOptions: any
}

export const AppLitteralsConfig: AppLitterals = {
    mobile: 'Please enter valid mobile number.',
    email: 'Please enter valid email.',
    required: 'This field is required.',
    toastOptions: {
        type: 'error',
        body: '',
        title: 'Alert',
        position: 'toast-top-right',
        url: false
    }
}