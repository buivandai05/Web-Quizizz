import { post } from "../utils/request";
import { get } from "../utils/request";


export const createAnswer = async (options) => {
    // 1) Lấy toàn bộ answers hiện tại
    const existing = await get("answers"); // trả về mảng

    // 2) Lọc ra các id hợp lệ là số và tìm max
    const numericIds = existing
        .map((a) => Number(a.id))
        .filter((n) => Number.isFinite(n)); // chỉ giữ số hợp lệ

    const nextId = numericIds.length > 0 ? Math.max(...numericIds) + 1 : 1;

    // 3) Gửi payload gồm id kiểu number
    const payload = { id: nextId, ...options };

    console.log("POST /answers payload:", payload); // debug: chắc chắn có id số

    const result = await post("answers", payload);
    return result;
};
