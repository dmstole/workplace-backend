export interface RequestEmailModel {
    email: string;
    template: TemplateEmail;
}

export interface TemplateEmail {
    subject: string;
    content: string;
}

export const typesTemplateEmail = ({
    requestResetPassword: (code: string): TemplateEmail => ({
        subject: "Esqueci minha senha",
        content: `Para realizar a mudança de senha informa o seguinte código: ${code}`
    })
});