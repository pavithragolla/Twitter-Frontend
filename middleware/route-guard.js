import store from "~/store";

export default function({ stroe, redirect }) {
    if (!store.state.token) {
        return redirect('/login')
    }
}