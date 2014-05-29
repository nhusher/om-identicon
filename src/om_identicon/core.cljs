(ns om-identicon.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)


(defn byte-vec [n]
  [(bit-and 0x000000ff n)
   (bit-and 0x000000ff (bit-shift-right n 8))
   (bit-and 0x000000ff (bit-shift-right n 16))
   (bit-and 0x000000ff (bit-shift-right n 24))])

(defn hex-color [r g b]
  (let [pad (fn [v] (case (count v)
                      0 "00"
                      1 (str "0" v)
                      2 v
                      "ff"))
        red (pad (.toString r 16))
        grn (pad (.toString g 16))
        blu (pad (.toString b 16))]
    (str "#" red grn blu)))

(defn canvas-context [h w]
  (let [canvas (js/document.createElement "canvas")]
    (set! (.-height canvas) h)
    (set! (.-width canvas) w)
    (.getContext canvas "2d")))

(defn make-identicon [n size]
  (let [h (* (hash n) 1234567)
        gs 8
        [b1 b2 b3 b4] (byte-vec h)
        px (.toString h 2)
        cx (canvas-context size size)
        s  (/ size gs)]
    (set! (.-fillStyle cx) (hex-color (min 200 b1) (min 200 b2) (min 200 b3)))
    (doseq [i (range 32)]
      (let [x (int (/ i gs))
            y (mod i gs)]
        (when (= "1" (get px i "0"))
          (.fillRect cx (* x s) (* y s) s s)
          (.fillRect cx (- size (* x s) s) (* y s) s s))))
    (.toDataURL (.-canvas cx) "image/png")))





(def app-state (atom {:user-name     "CRM TEST AUDI ADMIN"
                      :identicon-src (make-identicon "CRM TEST AUDI ADMIN" 128) }))


(defn identicon-maker [data owner]
  (reify
    om/IRender
    (render [_]
            (dom/div nil
                     (dom/img #js { :src (:identicon-src data) :height 64 :width 64 })
                     (dom/div #js { :className "pure-form pure-form-stacked" }
                              (dom/input #js { :onChange #(swap! app-state assoc
                                                                 :user-name (.. % -target -value)
                                                                 :identicon-src (make-identicon (hash (.. % -target -value)) 128))
                                               :value (:user-name data)
                                               :type "text"
                                               :className "pure-input-1" }))))))

(om/root identicon-maker app-state {:target (. js/document (getElementById "app"))})
