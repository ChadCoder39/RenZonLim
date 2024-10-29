import axios from "axios";
import cfg from "@/utils/config";

interface IRequestCreateInput {
    name: string;
    number: string;
    email: string;
    message: string;
}

export async function httpCreateRequest(input: IRequestCreateInput) {
    return await axios.post(`${cfg.serverBase}/create_request`, {
        data: input,
    });
}