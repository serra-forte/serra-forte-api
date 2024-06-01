import { FastifyInstance } from 'fastify'
import { RegisterUser } from './register/register-user-controller'
import { LoginUser } from './login/login-user-controller'
import { VerifyEmail } from './verify-email/verify-email-controller'
import { verifyTokenJWT } from '@/http/middlewares/verify-token-jwt'
import { SendForgotPassword } from './send-forgot-password/send-forgot-password'
import { ResetPassword } from './reset-password/reset-password-controller'
import { FindUser } from './find/find-user-controller'
import { DeleteUser } from './delete/delete-user-controller'
import { UpdateUser } from './update-full/update-user-controller'
import { LogoutUser } from './logout/logout-user-controller'
import { verifyUserRole } from '@/http/middlewares/verify-user-role'
import { EmailExists } from './email-exists/email-exists-controller'
import { RefreshToken } from './refresh-token/refresh-token-users-controller'
import { CreateNewPasswordByOldPassword } from './create-new-password-with-old-password/change-password-controller'
import { SendVerificationEmail } from './send-verification-email/send-verification-email-users-controller'
import { DeleteAllTokens } from './delete-all-tokens/delete-all-tokens-users-controller'
import { ListByShopkeeper } from './list-by-shopkeeper/list-by-shopkeeper-users-controller'
export async function usersRoutes(fastifyApp: FastifyInstance) {
    // register user
    fastifyApp.post('/', RegisterUser)

    // login user
    fastifyApp.post('/login', LoginUser)

    // email exists user
    fastifyApp.get('/email-exists', EmailExists)

    // refresh token
    fastifyApp.post('/refresh-token', RefreshToken)

    // logout user
    fastifyApp.post('/logout', {onRequest: [verifyTokenJWT]}, LogoutUser)

    // verify e-mail user
    fastifyApp.patch('/verify-email', VerifyEmail)

    // send forgot password user
    fastifyApp.post('/forgot-password', SendForgotPassword)

    // change password user by old password  {onRequest: [verifyTokenJWT]},
    fastifyApp.patch('/password-update/:id', CreateNewPasswordByOldPassword)

    // reset password user
    fastifyApp.patch('/reset-password', ResetPassword)

    // find user
    fastifyApp.get('/:id', {onRequest: [verifyTokenJWT]}, FindUser)

    // update user {onRequest: [verifyTokenJWT]}
    fastifyApp.put('/:id',  UpdateUser)

    // listar todos os users por shopkeeper
    fastifyApp.get('/shopkeeper', {onRequest: [verifyTokenJWT, verifyUserRole('SUPER')]}, ListByShopkeeper )

    // delete user {onRequest: [verifyTokenJWT]},
    fastifyApp.delete('/:id', DeleteUser)

    // enviar email de verificação
    fastifyApp.post('/send-verification-email/:email', {onRequest: 
        [
            verifyTokenJWT,
            verifyUserRole('GUEST', 'ADMIN', 'SUPER'),
        ],
        },
        SendVerificationEmail,
    )

    // delete all tokens
    fastifyApp.delete('/delete-all-tokens', {onRequest: [verifyTokenJWT, verifyUserRole('SUPER')]}, DeleteAllTokens)
}
