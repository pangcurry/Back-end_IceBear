import { Router } from "express";
import { adaptRoute } from "../adapters";
import { makeCalendarDayController, makeCalendarDayDetailController } from "../factories";

export default (router: Router): void => {
    router.get('/calendar',adaptRoute(makeCalendarDayController()));
    router.get('/calendar/detail', adaptRoute(makeCalendarDayDetailController()));
    // 캘린더 특정 날 상세 추가하기
}
